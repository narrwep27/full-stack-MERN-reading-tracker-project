const BookColl = require('../models');

const addUserBook = async (req, res) => {
    let book = await BookColl.insertMany(req.body);
};