const { Product } = require('../models/Product.model');
const { ProductFormat } = require('../models/ProductFomat.model');
const slugify = require('slugify');

module.exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find()
                                    .populate('categories')
                                    .populate('variants')
        return res.status(200).json({products})
    } catch (error) {
        return res.status(500).json({error: "Server error"})
    }
}

