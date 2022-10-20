const UserModel = require('../../Model/UserModel');
const jwt = require('jsonwebtoken');
const RefreshTokenModel = require('../../Model/RefreshTokenModel');
require('dotenv').config();
const loginController = async (req, res) => {
  try {
    const { username, phone } = req.body;
    // logged in as splunk
    const user = await UserModel.findOne({
      username,
      phone,
    });
    const accessToken = generateJwtAccessToken(user);
    const refreshToken = generateJwtRefreshToken(user);
    console.log(user._id);

    const dbTokenStore = await RefreshTokenModel.findOneAndUpdate(
      {
        user_id: user._id,
      },
      { refreshToken: refreshToken },
      { new: true, runValidators: true }
    );

    // console.log(dbTokenStore);

    res.status(200).json({
      success: true,
      payload: { user, accessToken, refreshToken, dbTokenStore },
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const generateJwtAccessToken = (user) => {
  console.log(user._id);
  return jwt.sign(
    {
      id: user._id,
      user_type: user.username,
      email: user.phone,
    },
    process.env.JWT_SECRETE,
    { expiresIn: process.env.JWT_EXPIRE }
  );
};
const generateJwtRefreshToken = (user) => {
  console.log(user);

  return jwt.sign(
    {
      id: user._id,
      user_type: user.username,
      email: user.phone,
    },
    process.env.JWT_REFRESH_SECRETE
  );
};

module.exports = loginController;
