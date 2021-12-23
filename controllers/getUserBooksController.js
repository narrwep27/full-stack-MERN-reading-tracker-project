const { UserColl } = require('../models');

const getUserBooks = async (req, res) => {
    try {
        let user = await UserColl.findOne({ username: req.params.username }).populate('books');
        res.status(200).json(user);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    };
};

module.exports = getUserBooks;