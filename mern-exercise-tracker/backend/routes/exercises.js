const router = require("express").Router();
let Exercise = require("../models/exercise.model");

// Endpoint (Route URL): Handles Get Requests
router.route("/").get((req, res) => {
  Exercise.find() //Mongoose function (find()) to get all the exercises from the database
    .then((exercises) => res.json(exercises))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Endpoint (/add): Handles Post Requests
router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  // Creates a new Exercise Entry in the database
  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise
    .save()
    .then(() => res.json("Exercise added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
