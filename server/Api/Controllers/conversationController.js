const ConversationModel = require("../../Model/ConversationModel");

const conversationController = async (req, res) => {
  const { member, channelId, read, numberOfMsgs, visibility } = req.body;
  try {
    // const newConversation = new Conversation({

    // });
    console.log("still in progress");
  } catch (error) {}
};

module.exports = conversationController;
