const router = require("express").Router();
const paymentController = require("../controllers/payment-controller");

router.route("/")
	.post(paymentController.pay);

module.exports = router;