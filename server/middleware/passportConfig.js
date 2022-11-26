const UserModel = require('../Model/UserModel');
const LocalStrategy = require('passport-local').Strategy;

function initialize(passport, getUserByUserName, getUserById) {
  console.log('qwertyuiop678888');

  const authenticateUser = async (username, phone, done) => {
    const user = await getUserByUserName(username);
    console.log(user);
    if (user == null) {
      return done(null, false, { message: 'Invalid Credentials' });
    }

    // console.log('LocalStrategy called');
    // passport.use(
    //   new LocalStrategy(
    //     { usernameField: 'username', passwordField: 'phone' },
    //     (username, password, done) => {
    //       console.log(password);
    //       UserModel.findOne({ username: username }, (err, user) => {
    //         if (err) throw err;
    //         if (!user) return done(null, false);

    //         return done(null, user);
    //       });
    //     }
    //   )
    // );

    passport.use(
      new LocalStrategy({ usernameField: 'username' }, authenticateUser)
    );
    passport.serializeUser((user, done) => done(null, user.id));
    console.log(user);
    passport.deserializeUser(async (id, done) => {
      console.log(await getUserById(id));
      return done(null, await getUserById(id));
    });
  };
}

module.exports = initialize;
