const router = require("express").Router();
const scrapeController = require("../../controllers/scrapeController");

router.route("/api/fetch")
.get(scrapeController.scrapeHeadlines);

module.exports = router;