const { Schema } = require('mongoose');

const BookSchema = new Schema(
    {
        title: { type: String, required: true },
        author: { type: String, required: true },
        overview: { type: String, required: true },
        publisher: { type: String, required: true },
        yearPublished: { type: Number, required: true },
        readingStatus: { type: String, required: true }
    },
    { timestamps: true }
);

module.exports = BookSchema;