const router = require('express').Router();
const addUser = require('../controllers/newUserController')

router.post('/newuser', addUser);

module.exports = router;