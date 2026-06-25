const mongoose = require("mongoose");

const otpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      unique: true,
    },
    hashedOtp: { type: String, required: true },
    expiresAt: { type: Date, required: true },
    // Stored only for registration flow
    pendingName: String,
    pendingSchoolName: String,
  },
  { timestamps: true }
);

// MongoDB TTL index auto-deletes expired records
otpSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

module.exports = mongoose.model("OtpToken", otpSchema);
