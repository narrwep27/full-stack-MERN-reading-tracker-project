const mongoose = require('mongoose');
const UserSchema = require('./UserSchema');
const BookSchema = require('./BookSchema');

const UserColl = mongoose.model('users', UserSchema);
const BookColl = mongoose.model('books', BookSchema);

module.exports = {
    UserColl,
    BookColl
};