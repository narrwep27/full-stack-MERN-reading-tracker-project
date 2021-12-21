const { BookColl } = require('../models');

const editBook = async (req, res) => {
    try {
        let edit = await BookColl.findOneAndUpdate({ _id: req.params.bookid}, req.body, { new: true });
        res.status(200).json(edit);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = editBook;