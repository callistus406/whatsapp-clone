const registerController = require("./registerController");
const loginController = require("./loginController");
// const profileController = require("./profileController");
const conversationController = require("./conversationController");
const {
  postMessageController,
  getMessageController,
} = require("./messageController");
module.exports = {
  conversationController,
  loginController,
  registerController,
  postMessageController,
  getMessageController,

  //   profileController,
  //   deleteController,
};
