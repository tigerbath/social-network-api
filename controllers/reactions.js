const { Thought } = require("../../models");

const addNewReactionToThought = async (req, res) => {
  try {
    const reaction = req.body;

    const { thoughtId } = req.params;

    const thought = await Thought.findByIdAndUpdate(thoughtId, {
      $push: { reactions: reaction },
    });

    return res.json({ success: true, data: thought });
  } catch (error) {
    console.log(`[ERROR]: Failed to create reaction | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create reaction" });
  }
};
module.exports = {
  addNewReactionToThought,
};
