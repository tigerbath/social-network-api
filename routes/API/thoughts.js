const { Router } = require("express");

const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
} = require("../../controllers/api/thoughts");

const router = Router({ mergeParams: true });
const reactions = require("./reactions");

router.get("/", getThoughts);
router.get("/:thoughtId", getThoughtById);
router.post("/", createThought);
router.put("/:thoughtId", updateThoughtById);
router.delete("/:thoughtId", deleteThoughtById);

// **`/api/thoughts/:thoughtId/reactions`**
router.use("/:thoughtId/reactions", reactions);

module.exports = router;
