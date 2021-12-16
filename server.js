const express = require('express');
const cors = require('cors');
const db = require('./db');
const { newUserRoute, existingUserRoute, addBookRoute, bookshelfRoute } = require('./back-end-routes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json())
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use('/', newUserRoute);
app.use('/', existingUserRoute);
app.use('/', addBookRoute);
app.use('/', bookshelfRoute)

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));