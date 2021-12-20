const { UserColl } = require('../models');

const addUserBook = async (req, res) => {
    try {
        let user = await UserColl.findOneAndUpdate({ username: req.params.username }, req.body, { new: true });;
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = addUserBook;