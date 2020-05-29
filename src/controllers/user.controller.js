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