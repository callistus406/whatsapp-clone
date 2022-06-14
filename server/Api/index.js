const express = require("express");
const router = express.Router();
const login = require("./Routes/login");
const register = require("./Routes/register");
const conversation = require("./Routes/conversation");
const message = require("./Routes/message");
const profile = require("./Routes/profile");

router.use(login);
router.use(register);
router.use(conversation);
router.use(message);
router.use(profile);

module.exports = router;
