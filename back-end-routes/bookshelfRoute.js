const router = require('express').Router();
const getUserBooks = require('../controllers/showBooksController');

router.get('/:username/bookshelf', getUserBooks);

module.exports = router;