const router = require('express').Router();
const authenticateToken = require('../../Auth/authenticateToken');
const authCheck = require('../../middleware/authCheck');
const {
  conversationController,
  getConversationController,
} = require('../Controllers');

router.post('/conversation', authCheck, conversationController);
router.get(
  '/conversation/:userId',

  getConversationController
);
module.exports = router;
