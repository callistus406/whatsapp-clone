const UserModel = require("../../Model/UserModel");
const loginController = async (req, res) => {
  try {
    // logged in as splunk
    const user = await UserModel.findOne({
      _id: "629ccb139cc7b37b4630750d",
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json(error);
  }
};
module.exports = loginController;
