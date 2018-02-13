const path = require("path");
const router = require("express").Router();
const articleRoutes = require("./articles");
const noteRoutes = require("./notes");
const scrapeRoutes = require("./scrape");
const scrapeController = require("../../controllers/scrapeController");
// API Routes
router.use("/articles", articleRoutes);
router.use("/notes", notesRoutes);
router.use("/scrape", scrapeRoutes);
router.get("/api/fetch", scrapeController.scrapeHeadlines);
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
