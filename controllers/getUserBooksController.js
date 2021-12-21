const { BookColl } = require('../models');

const getUserBooks = async (req, res) => {
    try {
        let book = await BookColl.findOne({ _id: req.params.bookid });
        res.status(200).json(book);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    };
};

module.exports = getUserBooks;