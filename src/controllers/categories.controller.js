const { Category } = require('../models/Category.model');
const slugify = require('slugify');

module.exports.getCategory = async (req, res) => {
    const { slug } = req.params;
    try {
        const category = await Category.findOne({slug});
        if(!category) return res.status(404).json({
            message: "Category not found"
        })
        return res.status(200).json({
            category
    })
    } catch (error) {
        return res.status(500).json({
            error: "Server error"
        })
    }

}
module.exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find().sort({'createdAt': -1});
        return res.status(200).json({
            categories
    })
    } catch (error) {
        return res.status(500).json({
            error: "Server error"
        })
    }

}
module.exports.createCategory = async (req, res) => {
    const { name } = req.body;
    const slug = slugify(name).toLowerCase();
    
    try {
        const category = await Category.findOne({slug});
        if(category) return res.status(400).json({
            message: "Category already exist !"
        })

        const newCategory = new Category({name, slug});
        await newCategory.save();
        
        res.status(201).json({
            message: `Category ${name} is created !`,
            category: newCategory
        })
    } catch (error) {
        return res.status(500).json({
            error: "Server error"
        })
    }
}

module.exports.deleteCategory = async (req, res) => {
    const slug  = req.params.slug.toLowerCase();

    try {
        const category = await Category.findOne({slug});
        if(!category) return res.status(400).json({
            message: "Category not found"
        })
        await Category.deleteOne({slug});
        return res.status(200).json({msg: "Category has been deleted"});

    } catch (error) {
        res.status(500).json({error: "Server error"});
    }
}
module.exports.updateCategory = async (req, res) => {
    const slug  = req.params.slug.toLowerCase();
    const { name } = req.body;
    try {
        const category = await Category.findOne({slug});
        if(!category) return res.status(400).json({
            message: "Category not found"
        })
        category.name = name;
        category.save();
        return res.status(200).json({
            category,
            message: `Category ${name} is updated !`
        })
    } catch (error) {
        res.status(500).json({error: "Server error"});
    }
}
