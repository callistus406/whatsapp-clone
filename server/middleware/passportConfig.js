const UserModel = require('../Model/UserModel');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function (passport) {
  console.log('LocalStrategy called');
  passport.use(
    new LocalStrategy(
      { usernameField: 'username', passwordField: 'phone' },
      (username, password, done) => {
        console.log(password);
        UserModel.findOne({ username: username }, (err, user) => {
          if (err) throw err;
          if (!user) return done(null, false);
          //   console.log(user);
          // bcrypt.compare(password, user.password, (err, result) => {
          //   if (err) throw err;
          //   if (result === true) {
          //     return done(null, user);
          //   } else {
          //     return done(null, false);
          //   }
          // });
          return done(null, user);
        });
      }
    )
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });
  passport.deserializeUser((id, cb) => {
    UserModel.findOne({ _id: id }, (err, user) => {
      const userInformation = {
        username: user.username,
      };
      cb(err, userInformation);
    });
  });
};

// const initialize = (passport, getUserByUsername, getUserById) => {
//   const authenticateUser = async (username, phone, done) => {
//     const user = await getUserByUsername(username);
//     console.log(user);
//     if (user == null) {
//       return done(null, false, { message: 'no user found' });
//     }

//     try {
//       if (phone === phone) {
//         return done(null, user);
//       } else {
//         return done(null, false, { message: 'password incorrect!' });
//       }
//     } catch (error) {
//       return done(error);
//     }
//   };

//   passport.use(
//     new LocalStrategy(
//       { usernameField: 'username', passwordField: 'phone' },
//       authenticateUser
//     )
//   );
//   passport.serializeUser((user, done) => done(null, user.id));
//   passport.deserializeUser((id, done) => done(null, getUserById(id)));
// };

// module.exports = initialize;
