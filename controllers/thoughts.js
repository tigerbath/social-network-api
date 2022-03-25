const { Thought } = require("../models");

// get all thoughts

const { Thought } = require("../../models");

const getThoughts = async (req, res) => {
  try {
    const thoughts = await Thought.find({});
    return res.json({ success: true, data: thoughts });
  } catch (error) {
    console.log(`[ERROR]: Failed to get Thoughts | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get Thoughts" });
  }
};

// get thought by ID

const getThoughtById = async (req, res) => {
  try {
    const { thoughtId } = req.params;
    const thought = await Thought.findById(thoughtId);
    return res.json({ success: true, data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to get Thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get Thought" });
  }
};

// create a thought

const createThought = async (req, res) => {
  try {
    const { thoughtText, username } = req.body;
    const newThought = await Thought.create({ thoughtText, username });
    return res.json({ success: true, data: newThought });
  } catch (error) {
    console.log(`[ERROR]: Failed to create Thought | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create Thought" });
  }
};

module.exports = {
  getThoughts,
  getThoughtById,
  createThought,
};
