import * as mongoose from 'mongoose';
import { genSalt, hash } from 'bcryptjs';
import { generate  } from 'shortid';

type UserDocument = mongoose.Document & {
    email: string;
    password: string;
    userType: number,
    userId: string,
    phoneNumber?: string,
    fullName?: string
};

const UserSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    userType: {
        type: Number,
        default: 1002,
    },
    userId: {
        type: String,
        default: generate()
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

export {
    User,
    UserDocument,
    UserSchema
}