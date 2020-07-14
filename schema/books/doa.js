var mongoose = require('mongoose');
var booksSchema = require('./model');

booksSchema.statics = {
    create: function (data, cb) {
        var book = new this(data);
        book.save(cb);
    },

    get: function (query, cb) {
        this.find(query, cb);
    },

    getByName: function (query, cb) {
        this.find(query, cb);
    },

    update: function (query, updateData, cb) {
        this.findOneAndUpdate(query, { $set: updateData }, { new: true }, cb);
    },

    delete: function (query, cb) {
        this.findOneAndDelete(query, cb);
    }
}

var booksModel = mongoose.model('Books', booksSchema);
module.exports = booksModel;