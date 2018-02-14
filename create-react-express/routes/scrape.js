const axios = require("axios");
const router = require("express").Router();
const scrapeController = require("../../scripts/scrape");

router.route("/scrape")
.get(scrapeController.scrape)
console.log("scrape route is hooked up");

module.exports = router;