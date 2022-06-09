const { mongoose, Schema } = require("./getMongoose");

const ConversationSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
    channelId: {
      type: String,
    },
    read: {
      type: Boolean,
    },
    numberOfMsgs: {
      type: Number,
    },
    visibility: {
      type: Boolean,
    },
  },
  { timestamp: true }
);

module.exports = mongoose.model("Conversation", ConversationSchema);
