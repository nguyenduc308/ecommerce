const { User } = require('../models/User.model');
const _ = require('lodash');
module.exports.getUser = async (req, res) => {
    const { userId } = req.params;

    try {
        const user = await User.findOne({userId}).select("-password");
        if(!user) return res.status(404).json({message: "User not found"});
        return res.status(200).json({
            user
        })
    } catch (error) {
        return res.status(500).json({
            error: "Server error"
        })
    }
}

module.exports.getUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");
        return res.status(200).json({users});
    } catch (error) {
        return res.status(500).json({
            error: "Server error"
        })
    }
} 

module.exports.uploadAvatar = async (req, res, next) => {
    const { userId } = req.params;
    
    try {
        let user = await User.findOne({userId}).select("-password")
        if (!user) return res.status(404).json({ error: "User not found" })
        console.log(req.error)
        if(req.file === 'false') {
            return res.status(400).json({ error: "File type does not support!" })
        }
        user.avatarImageUrl = req.file.path;
        user = await user.save();
        return res.status(200).json({
            user
        })
    } catch (err) {
        return res.status(500).json({
            error: "Server error"
        })
    }
}

module.exports.addAvatarUrl = async (req, res, next) => {
    const { avatarUrl } = req.body;
    const { userId } = req.params;

    if(!avatarUrl) {
        res.status(400).json({
            error: "Url invalid"
        })
    }
    try {
        let user = await User.findOne({userId}).select("-password")
        if (!user) return res.status(404).json({ error: "User not found" })
        user.avatarImageUrl = avatarUrl;
        user = await user.save()
        res.status(200).json({
            user
        })
        
    } catch (error) {
        return res.status(500).json({
            error: "Server error"
        })
    }
}

