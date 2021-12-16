const { Schema } = require('mongoose');

const UserSchema = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        books: [{ type: Schema.Types.ObjectId, ref: 'books' }]
    },
    { timestamps: true }
);

module.exports = UserSchema;