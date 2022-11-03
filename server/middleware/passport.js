const passport = require('passport');
const LocalStrategy = require('./LocalStrategy');
passport.use('local', LocalStrategy);
passport.serializeUser((user, done) => {
  done(null, user.id);
});
passport.deserializeUser((id, done) => {
  UserModel.findOne({ _id: id }, (err, user) => {
    done(null, user);
  });
});
module.exports = passport;
