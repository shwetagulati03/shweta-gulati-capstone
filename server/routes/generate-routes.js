const router = require("express").Router();
const generateController = require("../controllers/generate-controller");

router.route("/")
	.post(generateController.generateFile);

module.exports = router;