const UserModel = require('../../Model/UserModel');
const RefreshTokenModel = require('../../Model/RefreshTokenModel');

const registerController = (req, res, next) => {
  UserModel.findOne({ username: req.body.username }, async (err, doc) => {
    if (err) throw err;
    if (doc) return res.send('User Already Exists');

    const newUser = new UserModel({
      username: req.body.username,
      phone: req.body.phone,
    });

    createdUser = await newUser.save();
    res.status(200).json(createdUser);
  });
};

// const registerController = async (req, res) => {
//   const { username, phone, about } = req.body;
//   console.log(req.body);
//   const newUser = new UserModel({
//     username: username,
//     phone: phone,
//     about: about,
//   });
//   try {
//     // save user to mongodb
//     const savedUser = await newUser.save();

//     // sends response to the frontend
//     const newTokenStore = new RefreshTokenModel({
//       user_id: savedUser._id,
//     });
//     const createTokenStore = await newTokenStore.save();
//     res.status(200).json({
//       success: true,
//       payload: { createTokenStore, savedUser, createTokenStore },
//     });
//     // res.status(200).json(savedUser);
//   } catch (err) {
//     res.status(500).json(err.message);
//   }
// };
module.exports = registerController;
