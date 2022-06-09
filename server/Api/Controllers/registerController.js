const UserModel = require("../../Model/UserModel");
const registerController = async (req, res) => {
  const { username, phone, about } = req.body;
  console.log(req.body);
  const newUser = new UserModel({
    username: username,
    phone: phone,
    about: about,
  });
  try {
    // save user to mongodb
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
module.exports = registerController;
