const router = require('express').Router();
const addBook = require('../controllers/addBookController');
const addUserBook = require('../controllers/addUserBookController');

router.post('/:username/addbook', addBook);
router.put(`/:username/adduserbook`, addUserBook);

module.exports = router;