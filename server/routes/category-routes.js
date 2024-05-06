const router = require("express").Router();
const categoryController = require("../controllers/category-controller");
const { tokenVerify } = require("../middleware/auth.middleware");

router.route("/")
	.get(tokenVerify,categoryController.index);

// router.route("/products/:id")
// 	.get(categoryController.categoryProducts);

router.route("/:id")
	.get(tokenVerify,categoryController.categoryProducts);


	module.exports = router;
