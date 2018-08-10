const router = require("express").Router();
const menuController = require("../../controllers/menuController");

// Matches with "/api/order"
router.route("/")
  .get(menuController.findAll)
  .post(menuController.create);

// Matches with "/api/order/:id"
router
  .route("/:id")
  .get(menuController.findById)
  .put(menuController.update)
  .delete(menuController.remove);

module.exports = router;
