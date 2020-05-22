const express = require('express');
const router = express.Router();
const { getUser, getUsers } = require('../controllers/user.controller')

router.get('/:userId', getUser);
router.get('/', getUsers);

module.exports = router;