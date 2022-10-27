const router = require('express').Router();
const authenticateToken = require('../../Auth/authenticateToken');
const {
  conversationController,
  getConversationController,
} = require('../Controllers');

router.post(
  '/conversation',
  authenticateToken,

  conversationController
);
router.get(
  '/conversation/:userId',
  authenticateToken,
  getConversationController
);
module.exports = router;
