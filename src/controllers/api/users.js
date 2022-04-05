const { User } = require("../../models");

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

const createUser = async (req, res) => {
  try {
    const { username, email } = req.body;
    const newUser = await User.create({ username, email });
    return res.json({ success: true, data: newUser });
  } catch (error) {
    console.log(`[ERROR]: Failed to create User | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create User" });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const data = req.body;

    const updateUser = await User.findOneAndUpdate(userId, data);

    return res.json({ success: true, data: updateUser });
  } catch (error) {
    console.log(`[ERROR]: Failed to create User | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create User" });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { userId } = req.params;

    const deleteUser = await User.findByIdAndDelete(userId);

    return res.json({ success: true, data: deleteUser });
  } catch (error) {
    console.log(`[ERROR]: Failed to create User | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create User" });
  }
};

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
