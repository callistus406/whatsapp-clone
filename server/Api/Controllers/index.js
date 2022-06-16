const registerController = require("./registerController");
const profileController = require("./profileController");
const loginController = require("./loginController");
const getUserController = require("./getUserController");
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
  profileController,
  getUserController,
  //   profileController,
  //   deleteController,
};
