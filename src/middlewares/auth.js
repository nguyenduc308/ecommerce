const jwt = require('jsonwebtoken')

module.exports.auth = async (req, res, next) => {
    const token = req.headers.authorization;
    if(!token) return res.status(400).json({error: "Auth required"});
    try {
        const decoded = await jwt.verify(token, "A123213123AAAA")
        if(!decoded) {
            return res.status(400).json({error: "Auth required"})
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
    console.log(userType)
    const i = userTypeArr.findIndex(type => userType === type);
    if(i === -1) {
        return res.status(400).json({error: "Auth requried"})
    } else {
        return next();
    }
}
