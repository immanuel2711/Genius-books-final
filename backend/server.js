require("dotenv").config();
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const rateLimit = require("express-rate-limit");

const authRoutes = require("./routes/auth");
const contentRoutes = require("./routes/content");

// Fail loudly on missing critical secrets before the server starts
if (process.env.NODE_ENV === "production") {
  const required = [
    "MONGODB_URI", "JWT_SECRET", "FRONTEND_URL",
    "R2_ACCOUNT_ID", "R2_ACCESS_KEY_ID", "R2_SECRET_ACCESS_KEY",
    "SMTP_HOST", "SMTP_USER", "SMTP_PASS",
  ];
  for (const key of required) {
    if (!process.env[key]) {
      console.error(`FATAL: Missing required env var: ${key}`);
      process.exit(1);
    }
  }
  if (process.env.JWT_SECRET.length < 32) {
    console.error("FATAL: JWT_SECRET must be at least 32 characters.");
    process.exit(1);
  }
}

const app = express();

// Security headers + CSP
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", "data:", "https:"],
        mediaSrc: ["'self'", "https://*.r2.cloudflarestorage.com", "blob:"],
        connectSrc: ["'self'"],
        fontSrc: ["'self'"],
        objectSrc: ["'none'"],
        frameSrc: ["'none'"],
        baseUri: ["'self'"],
        formAction: ["'self'"],
      },
    },
    hsts: {
      maxAge: 31536000,
      includeSubDomains: true,
      preload: true,
    },
  })
);

// CORS — crash loudly if FRONTEND_URL is not set in production
const allowedOrigin = process.env.FRONTEND_URL;
if (!allowedOrigin) {
  if (process.env.NODE_ENV === "production") {
    console.error("FATAL: FRONTEND_URL must be set in production.");
    process.exit(1);
  }
  console.warn("Warning: FRONTEND_URL not set, CORS defaulting to http://localhost:5174");
}
app.use(
  cors({
    origin: allowedOrigin || "http://localhost:5174",
    credentials: true,
  })
);

app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());

// Rate limiting
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Too many requests. Please try again later." },
});

// Tighter limit for OTP sends to prevent abuse/spam
const otpRequestLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { success: false, message: "Too many code requests. Please wait before trying again." },
});

const contentUrlLimiter = rateLimit({
  windowMs: 60 * 1000,
  max: 60,
  message: { success: false, message: "Too many requests." },
});

app.use("/api/auth/request-otp", otpRequestLimiter);
app.use("/api/auth", authLimiter);
app.use("/api/content/url", contentUrlLimiter);

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/content", contentRoutes);

app.get("/api/health", (_, res) =>
  res.json({ success: true, message: "Genius Books API running." })
);

// 404
app.use((_, res) =>
  res.status(404).json({ success: false, message: "Route not found." })
);

// Error handler
app.use((err, _req, res, _next) => {
  console.error(err);
  res.status(500).json({ success: false, message: "Internal server error." });
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected.");
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });
