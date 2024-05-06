const router = require("express").Router();
const productsController = require("../controllers/products-controller");
const { tokenVerify } = require("../middleware/auth.middleware");

router.route("/")
	.get(tokenVerify,productsController.index);


router.route("/:id")
	.get(tokenVerify,productsController.getProducts);


	module.exports = router;