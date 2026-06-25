const express = require("express");
const { getCatalog, getVideoUrl } = require("../controllers/contentController");
const { authenticate } = require("../middleware/auth");

const router = express.Router();

// Public: catalog structure (no URLs exposed)
router.get("/", getCatalog);

// Private: signed URL for a specific video
router.get("/url", authenticate, getVideoUrl);

module.exports = router;
