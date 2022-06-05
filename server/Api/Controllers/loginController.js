const User = require("../../Model/user");

const loginController = async (req, res) => {
  try {
    console.log(req.body);
    const newUser = new User({
      username: req.body.username,
      phone: req.body.phone,
    });
    await newUser.save();
    res.status(200).json(req.body);
  } catch (err) {
    res.status(200).json(err.message);
  }
};
module.exports = loginController;
