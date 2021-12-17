const router = require('express').Router();
const checkUser = require('../controllers/checkUserController');

router.get('/existinguser', checkUser);

module.exports = router;