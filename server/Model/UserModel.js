const { mongoose, Schema } = require('./getMongoose');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      maxLength: 20,
      minLength: 3,
      required: [true, 'This field is required'],
    },
    phone: {
      type: Number,
      maxLength: 12,
      minLength: 10,
      required: [true, 'this field is required'],
    },
    profilePic: {
      type: String,
    },
    about: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);
