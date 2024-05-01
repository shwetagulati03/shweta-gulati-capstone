const router = require("express").Router();
const ordersController = require("../controllers/orders-controller");

router.route("/")
	.post(ordersController.add);



	module.exports = router;