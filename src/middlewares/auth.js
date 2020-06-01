const jwt = require('jsonwebtoken')
const { JWT_SECRET_KEY } = require('../config/env');

module.exports.auth = async (req, res, next) => {
    const token = req.headers.authorization;
    if(!token) return res.status(403).json({error: "Auth required"});
    try {
        const decoded = await jwt.verify(token, JWT_SECRET_KEY)
        if(!decoded) {
            return res.status(403).json({error: "Auth required"})
        } else {
            req.user = decoded;
            return next()
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({error: "Server error"})
    }
}

module.exports.authorized = (userTypeArr) => async (req, res, next) => {

    const { userType } = req.user;
    const i = userTypeArr.findIndex(type => userType === type);

    if(i === -1) {
        return res.status(403).json({error: "Auth required"})
    } else {
        return next();
    }

}
