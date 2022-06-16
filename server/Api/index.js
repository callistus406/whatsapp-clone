const express = require("express");
const router = express.Router();
const login = require("./Routes/login");
const register = require("./Routes/register");
const conversation = require("./Routes/conversation");
const message = require("./Routes/message");
const profile = require("./Routes/profile");
const getUser = require("./Routes/getUser");

router.use(login);
router.use(register);
router.use(conversation);
router.use(message);
router.use(profile);
router.use(getUser);

module.exports = router;
