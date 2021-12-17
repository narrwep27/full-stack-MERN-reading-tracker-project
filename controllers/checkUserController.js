const { UserColl } = require('../models');

const checkUser = async (req, res) => {
    try {
        let loginUser = await UserColl.find();
        res.status(200).json(loginUser);
    } catch (error) {
        return res.status(500).json({ error: error.message })
    };
};

module.exports = checkUser;