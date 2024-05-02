const express = require("express");
const router = express.Router();
const { tokenVerify } = require("../middleware/auth");

router.get("/protected-route", tokenVerify, (req, res) => {
    res.send("Can access");
});

module.exports = router;