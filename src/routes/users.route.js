const express = require('express');
const router = express.Router();
const { getUser, getUsers, uploadAvatar, addAvatarUrl } = require('../controllers/user.controller')
const { auth, authorized } = require('../middlewares/auth');
const { uploadImage } = require('../middlewares/uploadImage');

router.get('/:userId', getUser);
router.get('/', getUsers);
router.post(
    '/:userId/avatar',
    auth,
    authorized([1000, 1002]),
    uploadImage("avatar"),
    uploadAvatar
    )

router.post(
    '/:userId/avatar-url',
    auth,
    authorized([1000, 1002]),
    addAvatarUrl
)

module.exports = router;
