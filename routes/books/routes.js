var Books = require('../../invokes/books/api');

module.exports = function (router) {
    router.post('/upload', Books.uploadBook);
    router.get('/getBook', Books.getBook);
    router.put('/update/:id', Books.updateBook);
    router.delete('/remove/:id', Books.removeBook);
}