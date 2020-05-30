const express = require('express');
const router = express.Router();
const { auth, authorized } = require('../middlewares/auth');
const { uploadImage } = require('../middlewares/uploadImage');

router.post(
    '/',
    auth,
    authorized([1000]),
    uploadImage("other"),
    (req, res) => {
        
    }
    )

module.exports = router;