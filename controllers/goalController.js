const asyncHandler = require("express-async-handler");

// @desc Get Goals
// @route /api/goals
// @access Private
const getGoals = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "get goals" });
});

// @desc Set Goals
// @route /api/goals
// @access Private
const setGoal = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  res.status(200).json({ message: "Set goal" });
});

// @desc Update Goal
// @route /api/goals/:id
// @access Private
const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Updated goal ${req.params.id}` });
});

// @desc Delete Goal
// @route /api/goals/:id
// @access Private
const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Updated goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
