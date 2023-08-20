/* eslint-disable prettier/prettier */
const express = require('express');

const router = express.Router();

router.get('/', (req, res, next) => {
    if (req.role === '1') {
        res.send(req.username);
    } else {
        next('Authorization forbidden');
    }
});

module.exports = router;
