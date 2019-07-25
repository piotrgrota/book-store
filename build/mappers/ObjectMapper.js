"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("../models/Book");
var book_1 = require("../dbmodels/book");
//TODO remove it and use proper library called ObjectMapper
var ObjectMapper = /** @class */ (function () {
    function ObjectMapper() {
    }
    ObjectMapper.mapToDto = function (bookEntity) {
        var book = new Book_1.Book();
        book.isbn = bookEntity.isbn13;
        book.subTitle = bookEntity.subTitle;
        book.title = bookEntity.title;
        book.id = bookEntity.id;
        return book;
    };
    ObjectMapper.mapToEntity = function (book) {
        var bookEntity = new book_1.BookEntity();
        bookEntity.isbn13 = book.isbn;
        bookEntity.subTitle = book.subTitle;
        bookEntity.title = book.title;
        bookEntity.id = book.id;
        return bookEntity;
    };
    ObjectMapper.mapFromRequest = function (body) {
        var book = new Book_1.Book();
        book.isbn = body.isbn;
        book.subTitle = body.subTitle;
        book.title = body.title;
        return book;
    };
    return ObjectMapper;
}());
exports.ObjectMapper = ObjectMapper;
//# sourceMappingURL=ObjectMapper.js.map