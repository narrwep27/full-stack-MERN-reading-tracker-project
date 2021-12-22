const express = require('express');
const cors = require('cors');
const db = require('./db');
const { newUserRoute, existingUserRoute, addBookRoute, bookshelfRoute, allUsersRoute } = require('./back-end-routes');
const path = require('path');
require('dotenv').config({path:'./.env'});

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use('/', newUserRoute);
app.use('/', existingUserRoute);
app.use('/', addBookRoute);
app.use('/', bookshelfRoute);

// Insomnia testing routes
app.use('/', allUsersRoute);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')))
    app.get('*', (req, res) => {
        res.sendFile(path.join(`${__dirname}/client/build/index.html`))
    });
};

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));