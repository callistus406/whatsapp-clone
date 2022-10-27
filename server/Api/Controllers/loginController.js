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
    // console.log(user._id);

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
  // console.log(user._id);
  return jwt.sign(
    {
      id: user._id,
      username: user.username,
      phone: user.phone,
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
      username: user.username,
      phone: user.phone,
    },
    process.env.JWT_REFRESH_SECRETE
  );
};

const userRefreshToken = async (req, res) => {
  const refreshToken = req.body.token;

  // send error message if refresh token was not found
  if (!refreshToken)
    return res
      .status(401)
      .json({ success: false, payload: 'you are not authenticated' });

  RefreshTokenModel.findOne({
    refreshToken: refreshToken,
  })

    .then((result) => {
      if (!result)
        return res
          .status(404)
          .json({ success: false, payload: 'No token found' });
      if (result.refreshToken !== refreshToken)
        return res
          .status(403)
          .json({ success: false, payload: 'refresh token is not valid..!' });
      // decode jwt token
      console.log(refreshToken);

      jwt.verify(
        refreshToken,
        process.env.JWT_REFRESH_SECRETE,
        (error, user) => {
          // logs error msg to the console if error occurs
          error && console.log(error.message);
          console.log(user);
          // generate new tokens
          const newJwtAccessToken = generateJwtAccessToken(user);
          const newJwtRefreshAccessToken = generateJwtRefreshToken(user);
          // refreshTokenStore;

          // update token store
          RefreshTokenModel.findOneAndUpdate(
            {
              user_id: user.id,
            },
            { refreshToken: newJwtRefreshAccessToken },
            { new: true }
          )
            .then((response) => {
              res.status(200).json({
                success: true,
                payload: {
                  accessToken: newJwtAccessToken,
                  refreshToken: newJwtRefreshAccessToken,
                  dbToken: response,
                },
              });
            })
            .catch((error) => {
              createCustomError(error.message, 500);
            });
        }
      );
    })
    .catch((error) => {
      console.log(error.message);
    });
};

module.exports = { loginController, userRefreshToken };
