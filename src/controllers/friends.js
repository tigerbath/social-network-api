const { User } = require("../../models");

const addNewFriendToUser = async (req, res) => {
  try {
    const { id } = req.body;

    const { userId } = req.params;

    console.log(id, userId);

    const newFriend = await User.findByIdAndUpdate(userId, {
      $push: { friends: { _id: id } },
    });

    return res.json({ success: true, data: newFriend });
  } catch (error) {
    console.log(`[ERROR]: Failed to add friend | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to add friend" });
  }
};

const removeFriendFromUser = async (req, res) => {
  try {
    const removeFriend = await User.findByIdAndUpdate(
      { _id: req.params.userId },
      { $pull: { friends: req.params.friendId } },
      { new: true }
    );

    return res.json({ success: true, data: removeFriend });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete friend | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to delete friend" });
  }
};

module.exports = {
  addNewFriendToUser,
  removeFriendFromUser,
};
