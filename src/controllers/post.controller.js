const slugify = require('slugify');
const { Post } = require('../models/Post.model');
const { validatorCreatePost } = require('../middlewares/postValidator')
const { smartTrim } = require('../helpers/postHelper')

module.exports.getPost = async (req, res) => {
    const { slug } = req.params;
    try {
        const post = await Post.findOne({slug})
                                .populate('categories')
                                .populate('author', '_id userId firstName, lastName');
        if(!post) return res.status(404).json({
            message: "Post not found"
        })
        return res.status(200).json({
            post
    })
    } catch (error) {
        return res.status(500).json({
            error: "Server error"
        })
    }
}
module.exports.getPosts = async (req, res) => {

    let { pages = 1, limit = 10 } = req.query;
    pages = +pages;
    limit = +limit;
    if(isNaN(pages) || isNaN(limit)) {
        res.status(400).json({
            error: "Invalid pages or limit"
        })
    }
    try {
        const posts = await Post.find()
                                .populate('categories')
                                .populate('author', '_id userId firstName, lastName')
                                .limit(limit)
                                .skip(limit*(pages-1));
                                
        return res.status(200).json({
            posts
    })
    } catch (error) {
        return res.status(500).json({
            error: "Server error"
        })
    }
}
module.exports.createPost = async (req, res) => {
    const { valid, errors } = validatorCreatePost(req.body);
    if(!valid) return res.status(400).json({error: errors});

    let { title, content, author, categories, description = '', imageUrl, slug = ''} = req.body;
    if(!slug) {
        slug = slugify(title);
    }
    if(!categories) {
        categories = smartTrim(content);
    }
    try {
        const post = await Post.findOne({slug});
        if(post) {
            return res.status(400).json({
                error: "Slug already exist!"
            })
        }
        const newPost = new Post({title, slug, content, author, categories, description, imageUrl});
        const result = await newPost.save();
        res.status(201).json({
            message: "Success",
            post: result
        }) 
    } catch (error) {
        return res.status(500).json({
            error: "Server error"
        })
    }
}
