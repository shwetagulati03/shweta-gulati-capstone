const router = require("express").Router();
const productsController = require("../controllers/products-controller");

router.route("/")
	.get(productsController.index);


router.route("/:id")
	.get(productsController.getProducts);


	module.exports = router;