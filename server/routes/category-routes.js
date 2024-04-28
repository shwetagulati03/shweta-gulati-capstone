const router = require("express").Router();
const categoryController = require("../controllers/category-controller");

router.route("/")
	.get(categoryController.index);

// router.route("/products/:id")
// 	.get(categoryController.categoryProducts);

router.route("/:id")
	.get(categoryController.categoryProducts);


	module.exports = router;
