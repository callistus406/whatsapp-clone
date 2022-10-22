const router = require('express').Router();
const { userRefreshToken } = require('../Controllers');

router.post('/refresh', userRefreshToken);

module.exports = router;
