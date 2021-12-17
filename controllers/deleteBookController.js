const { BookColl } = require('../models');

const deleteBook = async (req, res) => {
    try {
        let deletedBook = await BookColl.findOneAndDelete({}, { rawResult: true });
        res.status(200).json(deletedBook);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    };
};

module.exports = deleteBook;