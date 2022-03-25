const { User } = require("../../models");

// get users

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    return res.json({ success: true, data: users });
  } catch (error) {
    console.log(`[ERROR]: Failed to get Users | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get Users" });
  }
};

// get user by id

const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    return res.json({ success: true, data: user });
  } catch (error) {
    console.log(`[ERROR]: Failed to get User | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to get User" });
  }
};

// create user

// update user

// delete user

module.exports = {
  getUsers,
  getUserById,
};
