const UserModel = require("../../Model/UserModel");
const profileController = async (req, res) => {
  try {
    const savedUser = await UserModel.findOne({
      username: "splunk admin",
      phone: "2345433264321",
    });
    res.status(200).json(savedUser);
  } catch (error) {
    res.status(404).json(error);
  }
};
module.exports = profileController;
