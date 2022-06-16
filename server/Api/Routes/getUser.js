const express = require("express");
const router = express.Router();
const { getUserController } = require("../Controllers");

router.get("/user", getUserController);
module.exports = router;
