const { BookColl } = require('../models');

const getUserBooks = async (req, res) => {
    try {
        let books = await BookColl.find();
        res.status(201).send(books);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    };
};

module.exports = getUserBooks;