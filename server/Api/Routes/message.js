const express = require("express");
const router = express.Router();
const messageController = require("../Controllers");

router.post("/message", messageController);

module.exports = router;
