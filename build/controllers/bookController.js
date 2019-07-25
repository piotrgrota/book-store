"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validatorService_1 = require("../services/validatorService");
var Book_1 = require("../models/Book");
var BookController = /** @class */ (function () {
    function BookController() {
        this.validator = new validatorService_1.BookValidator();
    }
    BookController.prototype.createBook = function (req, res) {
    };
    BookController.prototype.deleteBook = function (req, res) {
        var isbn = req.params.isbn;
        if (!this.validator.isValidISBN(isbn)) {
            res.status(404).send({ error: "Format of isbn book is invalid: " + isbn });
            return;
        }
        else {
            res.send('Hello World!');
        }
    };
    BookController.prototype.updateBook = function (req, res) {
        var isbn = req.params.isbn;
        if (!this.validator.isValidISBN(isbn)) {
            res.status(404).send({ error: "Format of isbn book is invalid: " + isbn });
            return;
        }
        res.send('Update!');
    };
    BookController.prototype.listAllBooks = function (req, res) {
        var book = new Book_1.Book("978-1-56619-909-4", "Title1", "Title1");
        res.json([book]);
    };
    return BookController;
}());
exports.BookController = BookController;
//# sourceMappingURL=bookController.js.map