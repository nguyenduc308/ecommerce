const mongoose = require('mongoose')

const ProductFormatSchema = new mongoose.Schema({
    promotion: Numberm,
    size: String,
    color: String,
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
}, {
    timestamps: true
})

const ProductFormat = mongoose.model('ProductFormat', ProductFormatSchema);

module.exports =  {
    ProductFormat,
    ProductFormatSchema
}