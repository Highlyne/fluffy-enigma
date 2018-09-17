const path = require("path");
const router = require("express").Router();
const scrapeRoutes = require("./scrape");
const scrapeController = require("../../controllers/scrapeController");
// API Routes
router.use("/scrape", scrapeRoutes);
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
