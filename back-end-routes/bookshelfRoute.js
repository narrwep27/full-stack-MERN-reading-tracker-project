const router = require('express').Router();
const getUserBooks = require('../controllers/getUserBooksController');

router.get('/:username/bookshelf', getUserBooks);

module.exports = router;