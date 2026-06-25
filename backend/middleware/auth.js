const jwt = require("jsonwebtoken");
const User = require("../models/User");
const RevokedToken = require("../models/RevokedToken");

const COOKIE_NAME = "gb_token";

async function authenticate(req, res, next) {
  const token = req.cookies?.[COOKIE_NAME];

  if (!token) {
    return res.status(401).json({ success: false, message: "Not authenticated." });
  }

  try {
    const { userId, jti } = jwt.verify(token, process.env.JWT_SECRET);

    // Reject tokens that have been explicitly revoked (e.g. after logout)
    if (jti) {
      const revoked = await RevokedToken.findOne({ jti });
      if (revoked) {
        res.clearCookie(COOKIE_NAME);
        return res
          .status(401)
          .json({ success: false, message: "Session expired. Please sign in again." });
      }
    }

    const user = await User.findById(userId);
    if (!user) {
      res.clearCookie(COOKIE_NAME);
      return res.status(401).json({ success: false, message: "User not found." });
    }

    req.user = user;
    next();
  } catch {
    res.clearCookie(COOKIE_NAME);
    res.status(401).json({ success: false, message: "Invalid or expired session." });
  }
}

module.exports = { authenticate };
