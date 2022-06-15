const UserModel = require("../../Model/UserModel");
const loginController = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      _id: "629f66f6cd16b099af3c7dda",
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json(error);
  }
};
module.exports = loginController;
