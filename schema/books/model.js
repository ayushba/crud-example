var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var booksSchema = new Schema({
    name: "String",
    description: "String",
    published_by: "String",
    class: "String",
    subject: "String",
    no_of_pages: "Number",
    subscriptions: [{ rate: "Number", months: "Number" }]
}, {
    timestamps: true
});

module.exports = booksSchema;