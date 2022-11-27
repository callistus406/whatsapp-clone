const router = require('express').Router();
const authenticateToken = require('../../Auth/authenticateToken');
const {
  ensureAuthenticated,
  isAdmin,
  forwardAuthenticated,
} = require('../../middleware/authCheck');
const {
  conversationController,
  getConversationController,
} = require('../Controllers');

router.post('/conversation', ensureAuthenticated, conversationController);
router.get(
  '/conversation/:userId',

  getConversationController
);
module.exports = router;
