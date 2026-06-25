const { S3Client, GetObjectCommand } = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const catalog = require("../data/catalog");

const r2 = new S3Client({
  region: "auto",
  endpoint: `https://${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com`,
  credentials: {
    accessKeyId: process.env.R2_ACCESS_KEY_ID,
    secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
  },
});

// GET /api/content — returns catalog structure without any storage URLs
function getCatalog(req, res) {
  const response = catalog.map((cls) => ({
    classGroup: cls.classGroup,
    label: cls.label,
    terms: cls.terms.map((t) => ({
      term: t.term,
      label: t.label,
      videoCount: t.videos.length,
      videos: t.videos.map((filename) => ({
        filename,
        label: filename.replace(/\.mp4$/i, ""),
      })),
    })),
  }));

  res.json({ success: true, data: response });
}

// GET /api/content/url?classGroup=LKG&term=1&filename=Page_11.mp4
// Returns a short-lived (5-minute) signed R2 URL
async function getVideoUrl(req, res) {
  const { classGroup, term, filename } = req.query;

  if (!classGroup || !term || !filename) {
    return res
      .status(400)
      .json({ success: false, message: "classGroup, term and filename are required." });
  }

  // Validate term is a safe positive integer — prevent injection via Number() edge cases
  const termNum = parseInt(term, 10);
  if (!Number.isInteger(termNum) || termNum < 1) {
    return res
      .status(400)
      .json({ success: false, message: "term must be a positive integer." });
  }

  const cls = catalog.find((c) => c.classGroup === classGroup);
  if (!cls) {
    return res.status(404).json({ success: false, message: "Class group not found." });
  }

  const termData = cls.terms.find((t) => t.term === termNum);
  if (!termData) {
    return res.status(404).json({ success: false, message: "Term not found." });
  }

  // Whitelist check — filename must be in the catalog; prevents path traversal
  if (!termData.videos.includes(filename)) {
    return res.status(404).json({ success: false, message: "Video not found." });
  }

  const key = `${termData.folder}/${filename}`;

  try {
    const command = new GetObjectCommand({
      Bucket: process.env.R2_BUCKET_NAME,
      Key: key,
    });

    // 5-minute expiry — short window limits URL sharing/leakage
    const url = await getSignedUrl(r2, command, { expiresIn: 300 });
    res.json({ success: true, data: { url, expiresIn: 300 } });
  } catch (err) {
    console.error("R2 signed URL error:", err);
    res.status(500).json({ success: false, message: "Could not generate video URL." });
  }
}

module.exports = { getCatalog, getVideoUrl };
