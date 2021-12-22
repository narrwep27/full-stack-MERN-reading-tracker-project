const { UserColl } = require('../models');

const checkUser = async (req, res) => {
    try {
        let loginUser = await UserColl.findOne({ username: req.params.username });
        console.log('error1');
        res.status(200).json(loginUser);
    } catch (error) {
        console.log('error1');
        return res.status(500).json({ error: error.message });
    };
};

module.exports = checkUser;