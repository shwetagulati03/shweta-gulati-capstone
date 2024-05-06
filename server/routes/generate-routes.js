const router = require("express").Router();
const generateController = require("../controllers/generate-controller");
const { tokenVerify } = require("../middleware/auth.middleware");

router.route("/")
	.post(tokenVerify,generateController.generateFile);

module.exports = router;