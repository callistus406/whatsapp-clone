const express = require("express");
const router = express.Router();
const { conversationController } = require("../Controllers");

router.get("/conversation", conversationController);
module.exports = router;
