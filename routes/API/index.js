const { Router } = require("express");

const users = require("./users");
const thoughts = require("./thoughts");

const router = Router();

// **`/api/users`**
router.use("/users", users);

// **`/api/thoughts`**
router.use("/thoughts", thoughts);

module.exports = router;
