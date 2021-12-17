const router = require('express').Router();
const getUserBooks = require('../controllers/getUserBooksController');
const addBook = require('../controllers/addBookController');
const deleteBook = require('../controllers/deleteBookController');

router.post('/:username/bookshelf/addbook', addBook);
router.delete('/:username/bookshelf/deletebook', deleteBook);
router.get('/:username/bookshelf', getUserBooks);

module.exports = router;