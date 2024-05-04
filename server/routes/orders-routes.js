const router = require("express").Router();
const ordersController = require("../controllers/orders-controller");
const { tokenVerify } = require("../middleware/auth.middleware");

router.route("/")
	.post(tokenVerify,ordersController.add);

router.route("/:id")
	.get(tokenVerify,ordersController.get);

router.route("/:id")
	.put(tokenVerify,ordersController.put);

router.route("/recipient")
	.post(tokenVerify,ordersController.recipient);

	module.exports = router;