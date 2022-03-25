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

const removeReactionFromThought = async (req, res) => {
  try {
    const { thoughtId, reactionId } = req.params;

    console.log(thoughtId, reactionId);

    const reaction = await Thought.findByIdAndUpdate(thoughtId, {
      $pull: { reactions: { _id: reactionId } },
    });

    return res.json({ success: true, data: reaction });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete reaction | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to delete reaction" });
  }
};
module.exports = {
  addNewReactionToThought,
  removeReactionFromThought,
};
