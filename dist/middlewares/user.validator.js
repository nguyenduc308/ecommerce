"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatorLogin = exports.validatorSignUp = void 0;
const validator_1 = require("../helpers/validator");
exports.validatorSignUp = (data) => {
    let errors = {};
    if (validator_1.isEmpty(data.email)) {
        errors['email'] = "Email is required";
    }
    else if (!validator_1.isEmail(data.email)) {
        errors['email'] = "Email invalid";
    }
    if (validator_1.isEmpty(data.password)) {
        errors['email'] = "Password is required";
    }
    else if (data.password.length < 6) {
        errors['password'] = "Password is weak";
    }
    if (data.password !== data.confirmPassword) {
        errors['confirmPassword'] = "Password confirm do not match";
    }
    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    };
};
exports.validatorLogin = (data) => {
    let errors = {};
    if (validator_1.isEmpty(data.email)) {
        errors['email'] = "Email is required";
    }
    if (validator_1.isEmpty(data.password)) {
        errors['password'] = "Password is required";
    }
    return {
        errors,
        valid: Object.keys(errors).length === 0 ? true : false
    };
};
