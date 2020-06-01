"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.User = void 0;
const mongoose = __importStar(require("mongoose"));
const bcryptjs_1 = require("bcryptjs");
const UserSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    userType: {
        type: Number,
        default: 1002,
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
});
exports.UserSchema = UserSchema;
UserSchema.pre('save', function (next) {
    const user = this;
    if (!user.isModified('password'))
        return next();
    bcryptjs_1.genSalt(10)
        .then(salt => bcryptjs_1.hash(user['password'], salt))
        .then(hash => {
        user['password'] = hash;
        return next();
    })
        .catch(err => {
        throw err;
    });
});
const User = mongoose.model('User', UserSchema, 'users');
exports.User = User;
