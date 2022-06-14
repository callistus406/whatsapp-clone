const router = require("express").Router();
const { profileController } = require("../Controllers");
router.get("/profile", profileController);

module.exports = router;
