const express = require('express');
const router = express.Router();
const { createPost, getPosts, getPost } = require('../controllers/post.controller')
const { auth, authorized } = require('../middlewares/auth');

router.post('/',auth,authorized([1000]), createPost);
router.get('/', getPosts);
router.get('/:slug', getPost);
// router.delete('/:slug',auth,authorized([1000]), deleteCategory);
// router.patch('/:slug',auth,authorized([1000]), updateCategory)

module.exports = router;