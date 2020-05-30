const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth.route'));
router.use('/users', require('./users.route'));
router.use('/categories', require('./categories.route'));
router.use('/posts', require('./post.route'));
// router.use('/upload', require('./uploadImage.route'));

module.exports = router;
