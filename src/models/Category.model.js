const mongoose = require('mongoose')

const CategorySchema = new mongoose.Schema({
    slug: {
        type: String,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    }
}, {
    timestamps: true
})

const Category = mongoose.model('Category', CategorySchema, 'categories');

module.exports =  {
    Category,
    CategorySchema
}