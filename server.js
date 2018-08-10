const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
app.use(express.static("client/build"));
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://heroku_lrwsp73t:2tqkdih5fn5qn5a8mrj6q4tnph@ds111798.mlab.com:11798/heroku_lrwsp73t" || "mongodb://localhost/my_db");

// Start the API server
app.listen(PORT, function() {
	console.log(`Server listening on PORT ${PORT}!`);
});
