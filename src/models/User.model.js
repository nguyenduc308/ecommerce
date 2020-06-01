const mongoose = require('mongoose')
const { genSalt, hash } = require('bcryptjs');


const UserSchema = new mongoose.Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    userType: {
        type: Number,
        default: 1002,
    },
    userId: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    email: {
        type: String, 
        required: true,
        unique: true,
    },
    password: {
        type: String, 
        required: true
    },
    avatarImageUrl: {
        type: String, 
    },
    blocked: {
        type: Boolean,
        default: false
    },
    confirm: {
        type: Boolean,
        default: false
    } 
}, {
    timestamps: true
})

UserSchema.pre('save', function(next) {
    const user = this;
    if(!user.isModified('password')) return next()
    genSalt(10)
        .then(salt =>hash(user['password'], salt))
        .then(hash => {
            user['password'] = hash;
            return next();
        })
        .catch(err => {
            throw err;
        })
})

const User = mongoose.model('User', UserSchema, 'users');

module.exports =  {
    User,
    UserSchema
}