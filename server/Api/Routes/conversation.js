const router = require("express").Router();

const { conversationController } = require("../Controllers");

router.post("/conversation", conversationController);
module.exports = router;
