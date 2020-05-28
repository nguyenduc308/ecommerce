const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const CategorySchema = new mongoose.Schema({
    slug: {
        type: String,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    products: [{
        type: ObjectId,
        ref: 'Product'
    }]
}, {
    timestamps: true
})

const Category = mongoose.model('Category', CategorySchema, 'categories');

module.exports =  {
    Category,
    CategorySchema
}