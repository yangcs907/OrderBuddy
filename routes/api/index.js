const router = require("express").Router();
const order = require("./order");
const menu = require("./menu");

// Mount routes with url path
router.use("/order", order);
router.use("/menu", menu);

module.exports = router;
