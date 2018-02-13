const router = require("express").Router();
const articleRoutes = require("./articles");
const noteRoutes = require("./notes");


router.use("/articles", articleRoutes);
router.use("/notes", notesRoutes);
router.use("/scrape", scrapeRoutes);

module.exports = router;
