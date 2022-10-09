const UserModel = require('../../Model/UserModel');
const loginController = async (req, res) => {
  try {
    const { username, phone } = req.body;
    // logged in as splunk
    console.log(req.body);
    const user = await UserModel.findOne({
      username,
      phone,
    });
    res.status(200).json({ success: true, user });
  } catch (error) {
    res.status(500).json(error);
  }
};
module.exports = loginController;
