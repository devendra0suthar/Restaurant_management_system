const express = require("express");
const router = express.Router();

// Student model
const Restaurant = require("../models/Restaurant");

// @route   GET /api/Restaurant/
// @desc    Get all Restaurant
// @access  Public
router.get("/", async (req, res) => {
  try {
    const restaurant = await Restaurant.find();
    console.log(restaurant);
    res.send({ restaurant });
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: err });
  }
});

// @route   GET /api/Restaurant/:id
// @desc    Get a specific student
// @access  Public
router.get("/:id", async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    res.send({ restaurant });
  } catch (err) {
    res.status(404).send({ message: "Student not found!" });
  }
});

// @route   POST /api/Restaurant/
// @desc    Create a student
// @access  Public
router.post("/", async (req, res) => {
  try {
    const newRestaurant = await Restaurant.create({
      name: req.body.name,
      email: req.body.email,
      address: req.body.address,
    });
    console.log(newRestaurant)
    res.send({ newRestaurant });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   PUT /api/Restaurant/:id
// @desc    Update a student
// @access  Public
router.put("/:id", async (req, res) => {
  try {
    const updatedStudent = await Restaurant.findByIdAndUpdate(
      req.params.id,
      req.body
    );
    res.send({ message: "The Restaurant was updated" });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

// @route   DELETE /api/Restaurant/:id
// @desc    Delete a student
// @access  Public
router.delete("/:id", async (req, res) => {
  try {
    const removeStudent = await Restaurant.findByIdAndRemove(req.params.id);
    res.send({ message: "The student was removed" });
  } catch (err) {
    res.status(400).send({ error: err });
  }
});

module.exports = router;
