const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");
const User = require("../models/User");
const RevokedToken = require("../models/RevokedToken");

const COOKIE_NAME = "gb_token";
const SALT_ROUNDS = 12;

function makeToken(userId) {
  const jti = crypto.randomUUID();
  const token = jwt.sign({ userId, jti }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || "7d",
  });
  return { token, jti };
}

function setCookieToken(res, token) {
  res.cookie(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    maxAge: 7 * 24 * 60 * 60 * 1000,
  });
}

function clearCookieToken(res) {
  res.clearCookie(COOKIE_NAME, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  });
}

function safeUser(user) {
  return { id: user._id, name: user.name, schoolName: user.schoolName, email: user.email };
}

// POST /api/auth/register
async function register(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, message: errors.array()[0].msg });
  }

  const { name, schoolName, email, password } = req.body;
  const normalizedEmail = email.toLowerCase().trim();

  try {
    const existing = await User.findOne({ email: normalizedEmail });
    if (existing) {
      return res.status(409).json({ success: false, message: "An account with this email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    const user = await User.create({
      name: name.trim(),
      schoolName: schoolName.trim(),
      email: normalizedEmail,
      password: hashedPassword,
    });

    res.status(201).json({ success: true, message: "Account created. Please sign in." });
  } catch (err) {
    console.error("register error:", err);
    res.status(500).json({ success: false, message: "Server error during registration." });
  }
}

// POST /api/auth/login
async function login(req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, message: errors.array()[0].msg });
  }

  const { email, password } = req.body;
  const normalizedEmail = email.toLowerCase().trim();
  const INVALID = { success: false, message: "Invalid email or password." };

  try {
    const user = await User.findOne({ email: normalizedEmail }).select("+password");
    if (!user || !user.password) return res.status(401).json(INVALID);

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json(INVALID);

    const { token } = makeToken(user._id);
    setCookieToken(res, token);

    res.json({ success: true, data: { user: safeUser(user) } });
  } catch (err) {
    console.error("login error:", err);
    res.status(500).json({ success: false, message: "Server error during login." });
  }
}

// POST /api/auth/logout
async function logout(req, res) {
  const token = req.cookies?.[COOKIE_NAME];
  if (token) {
    try {
      const { jti, exp } = jwt.verify(token, process.env.JWT_SECRET);
      if (jti) {
        await RevokedToken.create({ jti, expiresAt: new Date(exp * 1000) });
      }
    } catch {
      // Token already invalid — nothing to revoke
    }
  }
  clearCookieToken(res);
  res.json({ success: true, message: "Logged out." });
}

// GET /api/auth/me
async function getMe(req, res) {
  res.json({ success: true, data: { user: safeUser(req.user) } });
}

module.exports = { register, login, logout, getMe };
