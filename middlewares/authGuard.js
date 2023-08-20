/* eslint-disable prettier/prettier */
const jwt = require('jsonwebtoken');

const authGuard = (req, res, next) => {
    const { authorization } = req.headers;

    try {
        const token = authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
        const { username, role } = decodedToken;
        req.username = username;
        req.role = role;
        next();
    } catch (err) {
        next('Authorization failed!');
    }
};

module.exports = authGuard;
