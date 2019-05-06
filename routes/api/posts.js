const router = require("express").Router();
const postsController = require("../../controllers/postsController.js");

router.route("/")
    .get(postsController.findAll)
    .post(postsController.create);

router
    .route("/:id")
    .get(postsController.findById)
    .put(postsController.update)
    .delete(postsController.remove);

router
    .route("/:category")
    .get(postsController.findAll)
    .post(postsController.create);


module.exports = router;