const UserModel = require('../../Model/UserModel');
const jwt = require('jsonwebtoken');
const RefreshTokenModel = require('../../Model/RefreshTokenModel');
const passport = require('passport');
require('dotenv').config();
const initializePassport = require('../../middleware/passportConfig');

const loginController = async (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    // console.log(info);
    if (err) throw err;
    if (!user) res.send('No User Exists');
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.status(200).json(user);
        // console.log(req.user);
      });
    }
  })(req, res, next);
};
//   initializePassport(
//     passport,
//     (username) => {
//       user = UserModel.findOne({ username: username });
//       return user;
//     },
//     async (id) => {
//       user = await UserModel.findOne({ _id: id });
//       return user;
//     }
//   );
// };

//   router.post(
//     '/login',
//     function (req, res, next) {
//         console.log('routes/user.js, login, req.body: ');

//         console.log(req.body)
//         next()
//     },
//     passport.authenticate('local'),
//     (req, res) => {
//         console.log('logged in', req.user);
//         var userInfo = {
//             username: req.user.username
//         };
//         res.send(userInfo);
//     }
// )
// passport.authenticate('local', (err, user, info) => {
//   if (err) throw err;
//   if (!user)
//     return res.status(400).json({ success: false, payload: 'no user found' });
//   req.logIn(user, (err) => {
//     if (err) throw err;
//     res.status(200).json({ success: true, payload: user });
//   });
// })(req, res, next);
// };

// const loginController = async (req, res) => {
//   try {
//     const { username, phone } = req.body;
//     // logged in as splunk
//     const user = await UserModel.findOne({
//       username,
//       phone,
//     });
//     const accessToken = generateJwtAccessToken(user);
//     const refreshToken = generateJwtRefreshToken(user);
//     // console.log(user._id);

//     const dbTokenStore = await RefreshTokenModel.findOneAndUpdate(
//       {
//         user_id: user._id,
//       },
//       { refreshToken: refreshToken },
//       { new: true, runValidators: true }
//     );

//     // console.log(dbTokenStore);

//     res.status(200).json({
//       success: true,
//       payload: { user, accessToken, refreshToken, dbTokenStore },
//     });
//   } catch (error) {
//     res.status(500).json(error.message);
//   }
// };

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

/**
 * make an
 *
 */

//  const refreshToken = async (data) => {
//     console.log(data ? data : props.authToken[1]);
//     try {
//       const response = await axios.post('/refresh', {
//         token: props.authToken[1],
//       });
//       console.log(response);
//       let currentDate = new Date();
//       const decodedToken = jwtDecode(props.userInfo.payload.accessToken);
//       console.log(decodedToken);

//       // setToken({
//       //   refresh: response.data.payload.refreshToken,
//       //   access: response.data.payload.accessToken,
//       // });
//       setTimeout(() => {
//         console.log(response.data.payload.refreshToken);
//         props.getToken(
//           response.data.payload.accessToken,
//           response.data.payload.refreshToken
//         );
//         // refreshToken();
//         console.log(props.authToken[1]);
//         // axios.config.headers['authorization'] =
//         //   'Bearer ' + response.data.payload.accessToken;
//       }, 59000);
//       // if (decodedToken && decodedToken.exp * 1000 < currentDate.getTime()) {
//       //   // const data = await refreshToken();

//       //   axios.config.headers['authorization'] =
//       //     'Bearer ' + response.data.payload.accessToken;
//       // }
//       console.log(response.data.payload.accessToken);

//       // setAppUser({
//       //   response: response.data.payload,
//       //   ...appUser,
//       //   accessToken: response.data.payload.accessToken,
//       //   refreshToken: response.data.payload.refreshToken,
//       // });

//       console.log();
//       return response.data.payload;
//     } catch (error) {
//       console.log(error.message);
//     }
//   };
