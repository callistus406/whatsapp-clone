const router = require("express").Router();

const { registerController } = require("../Controllers");
router.post("/register", registerController);
module.exports = router;
