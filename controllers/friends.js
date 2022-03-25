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
