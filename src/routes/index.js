const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth.route'));
router.use('/users', require('./users.route'));
router.use('/categories', require('./categories.route'));

module.exports = router;
