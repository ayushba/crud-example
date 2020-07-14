let Books = require('../../schema/books/doa');

exports.uploadBook = function (req, res, next) {
    let book = {
        name: req.body.name,
        description: req.body.description,
        published_by: req.body.published_by,
        class: req.body.class,
        subject: req.body.subject,
        no_of_pages: req.body.no_of_pages,
        subscriptions: req.body.subscriptions,
    };
    console.log('book--upload->>>', book);

    Books.create(book, function (err, book) {

        if (err) {
            res.json({
                error: err
            })
        }
        res.json({
            message: "Book uploaded successfully"
        })
    })
}

exports.getBook = function (req, res, next) {
    let book_id = req.params._id;
    let name = req.params.name;
    let filter = {};
    if (book_id) {
        filter = { ...filter, _id: book_id };
    }
    if (name) {
        filter = { ...filter, name: name };
    }
    console.log('getBook=---->>>> ', req.params, filter);
    Books.get(filter, function (err, books) {
        if (err) {
            res.json({
                error: err
            })
        }
        res.json({
            books: books
        })
    })
}

// exports.getBook = function (req, res, next) {
//     Books.get({ name: req.params.name }, function (err, books) {
//         if (err) {
//             res.json({
//                 error: err
//             })
//         }
//         res.json({
//             books: books
//         })
//     })
// }

exports.updateBook = function (req, res, next) {
    console.log('update=---->>>> ', req.params);
    let book = {
        name: req.body.name,
        description: req.body.description,
        published_by: req.body.published_by,
        class: req.body.class,
        subject: req.body.subject,
        no_of_pages: req.body.no_of_pages,
        subscriptions: req.body.subscriptions,
    }
    Books.update({ _id: req.params.id }, book, function (err, book) {
        if (err) {
            res.json({
                error: err
            })
        }
        res.json({
            message: "Book updated successfully"
        })
    })
}

exports.removeBook = function (req, res, next) {
    console.log('deletge=---->>>> ', req.params);
    Books.delete({ _id: req.params.id }, function (err, book) {
        if (err) {
            res.json({
                error: err
            })
        }
        res.json({
            message: "Book deleted successfully"
        })
    })
}