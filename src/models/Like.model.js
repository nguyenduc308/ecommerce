const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const LikeSchema = new mongoose.Schema({
    userId: {
        type: ObjectId,
        ref: 'User'
    }
})

const Like = mongoose.model('Like', LikeSchema, 'likes');

module.exports =  {
    Like,
    LikeSchema
}