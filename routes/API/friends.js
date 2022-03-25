const { Router } = require("express");

const {
  addNewFriendToUser,
  removeFriendFromUser,
} = require("../../controllers/api/friends");

const router = Router({ mergeParams: true });

router.post("/", addNewFriendToUser);
router.delete("/:friendId", removeFriendFromUser);

module.exports = router;
