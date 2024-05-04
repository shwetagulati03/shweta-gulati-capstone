const router = require("express").Router();
const ordersController = require("../controllers/orders-controller");

router.route("/")
	.post(ordersController.add);

router.route("/:id")
	.get(ordersController.get);

router.route("/:id")
	.put(ordersController.put);

	module.exports = router;