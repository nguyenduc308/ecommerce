const mongoose = require('mongoose');
const { ProductFormatSchema } = require('./ProductFomat.model');    
const { ObjectId } = mongoose.Schema.Types

const ProductSchema = new mongoose.Schema({
    slug: String,
    SKU: String,
    content: String,
    promotion: Number,
    publisher: String,
    distributor: String,
    amount: Number,
    price: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    variants: [{ProductFormatSchema}],
    categories: [{
        type: ObjectId,
        ref: 'Category'
    }]
}, {
    timestamps: true
})

const Product = mongoose.model('Product', ProductSchema, 'products');

module.exports =  {
    Product,
    ProductSchema
}