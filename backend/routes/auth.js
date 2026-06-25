const express = require("express");
const { body } = require("express-validator");
const { register, login, logout, getMe } = require("../controllers/authController");
const { authenticate } = require("../middleware/auth");

const router = express.Router();

router.post(
  "/register",
  [
    body("name")
      .trim()
      .matches(/^[a-zA-Z\s.'\-]{2,60}$/)
      .withMessage("Name must be 2–60 letters. No numbers or symbols."),
    body("schoolName")
      .optional({ checkFalsy: true })
      .trim()
      .isLength({ max: 120 })
      .withMessage("School name must be under 120 characters."),
    body("email")
      .isEmail()
      .normalizeEmail()
      .withMessage("Enter a valid email address."),
    body("password")
      .matches(/^(?=.*[A-Za-z])(?=.*\d).{8,}$/)
      .withMessage("Min 8 characters with at least one letter and one number."),
  ],
  register
);

router.post(
  "/login",
  [
    body("email").isEmail().normalizeEmail().withMessage("Enter a valid email address."),
    body("password").notEmpty().withMessage("Password is required."),
  ],
  login
);

router.post("/logout", logout);

router.get("/me", authenticate, getMe);

module.exports = router;
