"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
class UserRoutes {
    routesRegister(app) {
        app.route('/register').post(user_controller_1.default.createUser);
    }
    routesLogin(app) {
        app.route('/login').post(user_controller_1.default.login);
    }
}
exports.default = UserRoutes;
