const express = require("express");
const router = express.Router();
const { loginController } = require("../Controllers");

router.get("/login", loginController);
module.exports = router;
