"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmail = exports.isEmpty = void 0;
exports.isEmpty = (str) => {
    if (str.trim() === "")
        return true;
    return false;
};
exports.isEmail = (email) => {
    const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(regEx))
        return true;
    return false;
};
