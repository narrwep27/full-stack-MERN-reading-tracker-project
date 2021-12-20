const router = require('express').Router();
const addBook = require('../controllers/addBookController');

router.post('/:username/addbook', addBook);

module.exports = router;