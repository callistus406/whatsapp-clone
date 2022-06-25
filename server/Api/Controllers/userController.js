const UserModel = require("../../Model/UserModel");
const postUserController = async (req, res) => {
  try {
    const user = await UserModel.findOne({
      _id: "629ccb139cc7b37b4630750d",
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json(error);
  }
};
const getUserController = async (req, res) => {
  const { userId, phone } = req.query;

  try {
    const user = await UserModel.findOne({
      _id: "629ccb139cc7b37b4630750d",
    });
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json(error);
  }
};
module.exports = { getUserController, postUserController };
