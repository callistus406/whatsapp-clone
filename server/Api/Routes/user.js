const express = require("express");
const router = express.Router();
const { getUserController, postUserController } = require("../Controllers");

router.get("/user/:userId", getUserController);
router.get("/user/:userId", postUserController);
module.exports = router;
