const router = require("express").Router();
const postRoutes = require("./posts");
// const subscribe = require("./subscribe");

router.use("/posts", postRoutes);

// router.use("/signup", subscribe);

module.exports = router;
