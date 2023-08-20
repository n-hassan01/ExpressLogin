/* eslint-disable prettier/prettier */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const loginRoute = require('./controllers/loginService');
const authorizedUser = require('./controllers/authorizedUser');
const checkAuthoriation = require('./middlewares/authGuard');

const app = express();

app.use(express.json());
app.use(cors());

// routing middleware
app.use('/', loginRoute);
app.use('/logs', checkAuthoriation, authorizedUser);

// error handling middleware
app.use((req, res, next) => {
    next('Requested url not found!');
});

app.use((err, req, res, next) => {
    if (err.message) {
        res.status(500).send(err.message);
        next();
    } else {
        res.status(500).send('Internal Server Error!');
        next();
    }
});

console.log('');

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
