const { BookColl } = require('../models');

const addBook = async (req, res) => {
    try {
        let newBook = await BookColl.insertMany(req.body);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ error: error.message });
    };
};

module.exports = addBook;