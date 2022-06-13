const registerController = require("./registerController");
const loginController = require("./loginController");
// const profileController = require("./profileController");
const {
  conversationController,
  getConversationController,
} = require("./conversationController");
const {
  postMessageController,
  getMessageController,
} = require("./messageController");
module.exports = {
  conversationController,
  getConversationController,
  loginController,
  registerController,
  postMessageController,
  getMessageController,

  //   profileController,
  //   deleteController,
};
