const express = require("express");
const router = express.Router();
const login = require("./Routes/login");
const register = require("./Routes/register");
const conversation = require("./Routes/conversation");

router.use(login);
router.use(register);
router.use(conversation);

module.exports = router;
