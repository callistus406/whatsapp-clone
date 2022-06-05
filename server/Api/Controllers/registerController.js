const registerController = async (req, res) => {
  const { username, phone } = req.body;
  try {
    console.log(req.body);
    const newUser = new User({
      username: username,
      phone: phone,
    });
    // save user to mongodb
    await newUser.save();
    res.status(200).json(req.body);
  } catch (err) {
    res.status(200).json(err.message);
  }
};
module.exports = registerController;
