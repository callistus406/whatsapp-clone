const express = require("express");
const router = express.Router();
const login = require("./Routes/login");
const register = require("./Routes/register");
const profile = require("./Routes/profile");

router.use(login);
router.use(register);
router.use(profile);

module.exports = router;
