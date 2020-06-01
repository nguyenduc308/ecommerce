const express = require('express');
const router = express.Router();
const { register, login, isAuth } = require('../controllers/auth.controller')
const { auth } = require('../middlewares/auth')
router.post('/register', register);
router.post('/login', login);
router.post('/is-auth', auth, isAuth);

module.exports = router;