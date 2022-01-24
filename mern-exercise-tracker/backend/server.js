const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

//This configures so that we can have our env virables in dotenv file
require("dotenv").config();

// Create express server on port 5000
const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // cors middleware
app.use(express.json()); // Allows us to parse json

// Get the MongoDB database uri from MongoDB ATLAS dashboard
const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true });

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// Starts the server and listens on the port
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
