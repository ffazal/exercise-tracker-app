const router = require("express").Router();
let User = require("../models/user.model");

// Endpoint (Route URL): Handles Get Requests
router.route("/").get((req, res) => {
  User.find() // find() is a mongoose funtion that gets all the users from the mongoDB database Atlas
    .then((users) => res.json(users)) // Return the users in json format
    .catch((err) => res.status(400).json("Error: " + err)); // Catch an error and return it
});

// Endpoint (/add): Handles Post Requests
router.route("/add").post((req, res) => {
  const username = req.body.username;

  const newUser = new User({ username });

  // Creates a new user entry in the database
  newUser
    .save()
    .then(() => res.json("User added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
