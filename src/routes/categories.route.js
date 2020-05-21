const express = require('express');
const router = express.Router();
const { getCategory, getCategories, createCategory, deleteCategory, updateCategory } = require('../controllers/categories.controller')
const { auth, authorized } = require('../middlewares/auth');

router.post('/',auth,authorized([1000]), createCategory);
router.get('/', getCategories);
router.get('/:slug', getCategory);
router.delete('/:slug',auth,authorized([1000]), deleteCategory);
router.patch('/:slug',auth,authorized([1000]), updateCategory)

module.exports = router;