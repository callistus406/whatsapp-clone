const router = require('express').Router();
const MessageModel = require('../../Model/MessageModel');
const UserModel = require('../../Model/UserModel');
const ConversationModel = require('../../Model/ConversationModel');
const authenticateToken = require('../../Auth/authenticateToken');
const {
  postMessageController,
  getMessageController,
} = require('../Controllers');
// post
router.post('/message', authenticateToken, postMessageController);
// get
router.get('/message/:conversationId', authenticateToken, getMessageController);

module.exports = router;
module.exports = router;
