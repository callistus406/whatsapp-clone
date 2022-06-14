const ConversationModel = require("../../Model/ConversationModel");

const conversationController = async (req, res) => {
  const { senderId, receiverId, channelId, read, numberOfMsgs, visibility } =
    req.body;
  console.log(senderId, receiverId);
  const newConversation = new ConversationModel({
    members: [senderId, receiverId],
  });
  //   console.log(senderId);
  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
    // console.log("still in progress");
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const getConversationController = async (req, res) => {
  const { senderId, receiverId, channelId, read, numberOfMsgs, visibility } =
    req.body;
  console.log(senderId, receiverId);
  try {
    const savedConversation = await ConversationModel.find({
      members: { $in: [req.params.userId] },
    });
    //   console.log(senderId);
    res.status(200).json(savedConversation);
    console.log("still in progress");
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = { conversationController, getConversationController };
