const mongoose = require('mongoose')
const { LikeSchema } = require('./Like.model')
const { ObjectId } = mongoose.Schema.Types

const PostSchema = new mongoose.Schema({
    slug: {
        type: String, 
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    imageUrl: {
        type: String
    },
    author: {
        type: ObjectId,
        ref: 'User'
    },
    categories: [
        {
            type: ObjectId,
            ref: 'Category'
        }
    ],
    likes: [LikeSchema],
    comments: [
        {
            type: ObjectId,
            ref: 'Comment'
        }
    ]
}, {
    timestamps: true
})

const Post = mongoose.model('Post', PostSchema, 'post');

module.exports =  {
    Post,
    PostSchema
}