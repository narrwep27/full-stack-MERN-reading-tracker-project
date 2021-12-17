const router = require('express').Router();
const getUserBooks = require('../controllers/getUserBooksController');
const addBook = require('../controllers/addBookController');

router.post('/:username/bookshelf/addbook', addBook);
router.get('/:username/bookshelf', getUserBooks);

module.exports = router;