const { Router } = require("express");

const {
  getUsers,
  getUserById,
  createUser,
  deleteUserById,
  updateUserById,
} = require("../../controllers/api/users");

const router = Router({ mergeParams: true });
const friends = require("./friends");

router.get("/", getUsers);
router.get("/:userId", getUserById);
router.post("/", createUser);
router.put("/:userId", updateUserById);
router.delete("/:userId", deleteUserById);

// **`/api/users/:userId/friends/:friendId`**
router.use("/:userId/friends", friends);

module.exports = router;
