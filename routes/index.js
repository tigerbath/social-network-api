const router = require("express").Router();

const api = require("./api");

// add prefix of `/api` to all of the api routes imported from the `api` directory
router.use("/api", apis);

router.use((req, res) => {
  res.status(404).send("<h1>404 Error!</h1>");
});

module.exports = router;
