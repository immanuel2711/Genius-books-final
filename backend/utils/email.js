const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendOtpEmail(to, otp) {
  await transporter.sendMail({
    from: process.env.SMTP_FROM || `"Genius Books" <${process.env.SMTP_USER}>`,
    to,
    subject: "Your Genius Books verification code",
    text: `Your one-time verification code is: ${otp}\n\nThis code expires in 10 minutes. Do not share it with anyone.`,
    html: `
      <div style="font-family:sans-serif;max-width:420px;margin:0 auto;padding:24px;background:#fff">
        <h2 style="color:#1a1a2e;margin:0 0 8px">Genius Books</h2>
        <p style="color:#444;margin:0 0 16px">Your one-time verification code:</p>
        <div style="font-size:36px;font-weight:700;letter-spacing:10px;color:#d4a017;padding:20px;background:#f9f9f9;border-radius:8px;text-align:center;margin:0 0 16px">${otp}</div>
        <p style="color:#888;font-size:13px;margin:0">Expires in <strong>10 minutes</strong>. Never share this code with anyone.</p>
      </div>
    `,
  });
}

module.exports = { sendOtpEmail };
