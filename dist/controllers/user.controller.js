"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_model_1 = require("../models/User.model");
const bcryptjs_1 = require("bcryptjs");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_validator_1 = require("../middlewares/user.validator");
class UserController {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { valid, errors } = user_validator_1.validatorSignUp(req.body);
            if (!valid)
                return res.status(400).json({ error: errors });
            const { email, password, fullName, phoneNumber } = req.body;
            try {
                const user = yield User_model_1.User.findOne({ email });
                if (user)
                    return res.status(400).json({ msg: 'Email already exist!' });
                const newUser = new User_model_1.User({ email, password, fullName, phoneNumber });
                yield newUser.save();
                const payload = { id: newUser._id };
                jsonwebtoken_1.default.sign(payload, 'A123213123AAAA', { expiresIn: 360000000 }, (error, token) => {
                    if (error)
                        return res.status(500).json({ error: "Server error" });
                    const userRes = { email, fullName, phoneNumber };
                    return res.status(201).json({ token, user: { email, fullName, phoneNumber } });
                });
            }
            catch (error) {
                return res.status(500).json({ error: "Server error" });
            }
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { valid, errors } = user_validator_1.validatorLogin(req.body);
            if (!valid)
                return res.status(400).json({ error: errors });
            const { email, password } = req.body;
            try {
                const user = yield User_model_1.User.findOne({ email });
                if (!user)
                    return res.status(400).json({ error: "Login fail" });
                const isMatch = bcryptjs_1.compare(password, user['password']);
                if (!isMatch)
                    return res.status(400).json({ error: "Login fail" });
                const payload = { id: user._id };
                jsonwebtoken_1.default.sign(payload, 'A123213123AAAA', { expiresIn: 360000000 }, (error, token) => {
                    if (error)
                        return res.status(500).json({ error: "Server error" });
                    const userRes = { email: user['email'], fullName: user['fullName'], phoneNumber: user['phoneNumber'] };
                    return res.status(201).json({ token, user: userRes });
                });
            }
            catch (error) {
                return res.status(500).json({ error: "Server error" });
            }
        });
    }
}
exports.default = new UserController();
