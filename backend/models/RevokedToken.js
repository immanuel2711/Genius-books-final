const mongoose = require("mongoose");

const revokedSchema = new mongoose.Schema(
  {
    jti: { type: String, required: true, unique: true },
    expiresAt: { type: Date, required: true },
  },
  { timestamps: true }
);

// Auto-delete once the JWT itself would have expired anyway
revokedSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });
revokedSchema.index({ jti: 1 });

module.exports = mongoose.model("RevokedToken", revokedSchema);
