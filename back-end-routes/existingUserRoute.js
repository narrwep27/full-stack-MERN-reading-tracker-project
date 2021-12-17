const router = require('express').Router();
const checkUser = require('../controllers/existingUserController');

router.get('/existinguser', checkUser);

module.exports = router;