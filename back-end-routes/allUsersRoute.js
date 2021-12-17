const router = require('express').Router();
const { UserColl } = require('../models');

router.get('/allusers', async (req, res) => {
    let users = await UserColl.find();
    res.json(users);
});

module.exports = router;