const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({
  title: { type: String, required: true },
  link: String,
  synopsis: String,
  date: { type: Date, default: Date.now }
});

const Articles = mongoose.model("Article", articleSchema);

module.exports = Articles;
