const express = require('express');
const router = express.Router();
const { auth, authorized } = require('../middlewares/auth');
const { uploadImage } = require('../middlewares/uploadImage');
const { upload, deleteMedia, getAllMedia, getMedia } = require('../controllers/media.controller')

router.post(
    '/upload',
    auth,
    authorized([1000]),
    uploadImage("other"),
    upload
    )
router.delete(
    '/:id',
    auth,
    authorized([1000]),
    deleteMedia
)
router.get(
    '/',
    auth,
    authorized([1000]),
    getAllMedia
)
router.get(
    '/:id',
    auth,
    authorized([1000]),
    getMedia
)
module.exports = router;