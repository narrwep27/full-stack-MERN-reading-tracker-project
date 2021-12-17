const router = require('express').Router();
const getUserBooks = require('../controllers/getUserBooksController');
const addBook = require('../controllers/addBookController');
const deleteBook = require('../controllers/deleteBookController');
const editBook = require('../controllers/editBookController');

router.post('/:username/bookshelf/addbook', addBook);
router.delete('/:username/bookshelf/deletebook', deleteBook);
router.put('/:username/bookshelf/editbook', editBook);
router.get('/:username/bookshelf', getUserBooks);

module.exports = router;