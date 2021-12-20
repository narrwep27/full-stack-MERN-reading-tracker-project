const router = require('express').Router();
const checkUser = require('../controllers/checkUserController');

router.get('/existinguser/:username', checkUser);

module.exports = router;