const { Schema } = require('mongoose');

const UserSchema = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        books: { type: Array, required: true }
    },
    { timestamps: true }
);

module.exports = UserSchema;