/* eslint-disable prettier/prettier */
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const loginRoute = require('./controllers/loginService');

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

// routing middleware
app.use('/', loginRoute);

// error handling middleware
app.use((req, res, next) => {
    next('Requested url not found!');
});

app.use((err, req, res) => {
    if (err.message) {
        res.status(500).send(err.message);
    } else {
        res.status(500).send('Server side error!');
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
