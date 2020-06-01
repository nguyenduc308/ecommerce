const _ = require('lodash');
const { User } = require('../models/User.model');
const { Media } = require('../models/Media.model');

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
module.exports.getUserOwnedProfile = async (req, res) => {
    const { id } = req.user;
    try {
        const user = await User.findById(id).select("-password");
        return res.status(200).json({user});
    } catch (error) {
        return res.status(500).json({
            error: "Server error"
        })
    }
} 

module.exports.uploadAvatar = async (req, res, next) => {
    const { userId } = req.params;
    const typesMustMatch = ['image/jpeg', 'image/jpeg']
    if(!typesMustMatch.includes(req.file.mimetype)) {
        return res.status(400).json({error: "The type of file does not support !"})
    }
    const mediaPath = `media/images/others/${req.file.filename}`;
    const [mediaType] = req.file.mimetype.split('/');

    try {
        let user = await User.findOne({userId}).select("-password");
        if (!user) return res.status(404).json({ error: "User not found" });
        
        const newMedia = new Media({
            mediaType,
            fileName: req.file.filename,
            postBy: req.user.id,
            url: mediaPath,
            format: req.file.mimetype,
            
        });
        const {url} = await newMedia.save()

        user.avatarImageUrl = url;
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

