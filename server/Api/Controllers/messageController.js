const MessageModel = require('../../Model/MessageModel');

const postMessageController = async (req, res) => {
  const { conversationId, sender, text } = req.body;
  console.log(req.body);
  const newMessage = new MessageModel({
    conversationId,
    sender,
    text,
  });

  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (error) {
    res.status(200).json(error);
  }
};

const getMessageController = async (req, res) => {
  try {
    console.log(req);
    const messages = await MessageModel.find({
      conversationId: req.params.conversationId,
    });
    res.status(200).json(messages);
  } catch (error) {
    res.status(200).json(error);
  }
};

module.exports = {
  postMessageController,
  getMessageController,
};
// module.exports = ;
