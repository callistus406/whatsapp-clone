const express = require('express');
const router = express.Router();
const { loginController } = require('../Controllers');
const passport = require('../../middleware/passport');
// const loginController = require('../../app/loginController');

router.post('/login', loginController);
module.exports = router;
