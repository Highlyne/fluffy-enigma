// Require Node Packages
// ===============================================
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Initialize Express
// ==============================================
// const routes = require("./routes"); ------Delete when everything is working
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser
// ================================================
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Add routes, both API and view
// app.use(routes); -------  Delete when everything is working

// Config for Database
// ======================================================
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/webScraperdb",
);

// Start the server
// ====================================================
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// Send every request to the React app
// Define any API routes before this runs
// app.get("*", function(req, res) {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });