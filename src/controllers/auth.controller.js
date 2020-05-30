const { validatorLogin, validatorSignUp } = require('../middlewares/authValidator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const { User } = require('../models/User.model');
const { compare } = require('bcryptjs')
const shortid = require('shortid');

module.exports.register = async (req, res) => {
    const { valid, errors } = validatorSignUp(req.body);
    if(!valid) return res.status(400).json({error: errors});

    const { email, password, fullName, phoneNumber} = req.body;

    try {
        const user = await User.findOne({email});
        if(user) return res.status(400).json({msg: 'Email already exist!'});
        
        const userId = shortid.generate()
        const newUser = new User({email, password, fullName, phoneNumber, userId});
        await newUser.save();

        const payload = {id: newUser._id, userType: newUser.userType};
        jwt.sign(
            payload, 
            'A123213123AAAA', 
            {expiresIn: 360000000}, 
            (error, token)=> {
                if(error) return  res.status(500).json({error: "Server error"});
                return res.status(201).json(
                    {
                    token, 
                    user: _.pick(newUser, ['email', 'firstName','lastName', 'userId', 'phoneNumber', 'createdAt', 'updatedAt', 'avatarImageUrl'])
                    });
            })

    } catch (error) {
        return res.status(500).json({error: "Server error"})
    }
}

module.exports.login = async (req, res) => {

    const { valid, errors } = validatorLogin(req.body);
    if(!valid) return res.status(400).json({error: errors});
    const { email, password} = req.body;
    try {
        const user = await User.findOne({email});
        if(!user) return res.status(400).json({error: "Login fail"});
        const isMatch = await compare(password, user['password']);
        if(!isMatch) return res.status(400).json({error: "Login fail"})

        const payload = {id: user._id, userType: user.userType};

        jwt.sign(
            payload, 
            'A123213123AAAA', 
            {expiresIn: 360000000}, 
            (error, token)=> {
                if(error) return  res.status(500).json({error: "Server error 2"})
                return res.status(201).json({
                    token, 
                    user: _.pick(user, ['email', 'firstName','lastName', 'userId', 'phoneNumber', 'createdAt', 'updatedAt', 'avatarImageUrl']),
                });
            })
    } catch (error) {
        return res.status(500).json({error: "Server error"})
    }
}
