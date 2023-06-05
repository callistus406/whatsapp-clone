const router = require('express').Router();
const { getContactsController } = require('../Controllers');

router.get('/contacts', getContactsController);

module.exports = router;
