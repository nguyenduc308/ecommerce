const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const MediaSchema = new mongoose.Schema({
    postBy: {
        type: ObjectId,
        ref: 'User'
    },
    url: {
        type: String,
        required: true
    },
    fileName: {
        type: String,
        required: true
    },
    format: {
        type: String,
        required: true
    },
    mediaType: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const Media = mongoose.model('Media', MediaSchema, 'mediaRefs');

module.exports =  {
    Media,
    MediaSchema
}