const router = require("express").Router();
const usersController = require("../controllers/users-controller");

router.route("/")
	.post(usersController.login);

module.exports = router;