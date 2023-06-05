const express = require('express');
const router = express.Router();
const { loginController } = require('../Controllers');
const passport = require('passport');
// const loginController = require('../../app/loginController');
const UserModel = require('../../Model/UserModel');
const initializePassport = require('../../middleware/passportConfig');
const {
  ensureAuthenticated,
  forwardAuthenticated,
} = require('../../middleware/authCheck');
// router.get('/login', loginController);

initializePassport(
  passport,
  (username) => UserModel.findOne({ username: username }),
  (id) => UserModel.findOne({ _id: id })
);

router.post(
  '/login',
  loginController
  // passport.authenticate('local', {
  //   successRedirect: '/',
  //   failureRedirect: '/api/v1/login',
  //   failureFlash: true,
  // })
);
module.exports = router;
