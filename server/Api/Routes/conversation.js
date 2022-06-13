const router = require("express").Router();

const {
  conversationController,
  getConversationController,
} = require("../Controllers");

router.post("/conversation", conversationController);
router.get("/conversation/:userId", getConversationController);
module.exports = router;
