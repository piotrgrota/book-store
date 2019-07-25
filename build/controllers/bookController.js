"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var validatorService_1 = require("../services/validatorService");
var ObjectMapper_1 = require("../mappers/ObjectMapper");
var book_1 = require("../dbmodels/book");
var typeorm_1 = require("typeorm");
var BookController = /** @class */ (function () {
    function BookController() {
        this.validator = new validatorService_1.BookValidator();
    }
    BookController.prototype.createBook = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var book, bookRepository, bookEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        book = ObjectMapper_1.ObjectMapper.mapFromRequest(req.body);
                        if (!this.validator.isValidISBN(book.isbn)) {
                            res.status(404).send({ error: "Format of isbn book is invalid: " + book.isbn });
                            return [2 /*return*/];
                        }
                        bookRepository = typeorm_1.getManager().getRepository(book_1.BookEntity);
                        bookEntity = ObjectMapper_1.ObjectMapper.mapToEntity(book);
                        return [4 /*yield*/, bookRepository.insert(bookEntity)];
                    case 1:
                        _a.sent();
                        res.send({ message: "Book has been inserted with id: " + bookEntity.id });
                        return [2 /*return*/];
                }
            });
        });
    };
    BookController.prototype.deleteBook = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, bookRepository, bookEntity;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        bookRepository = typeorm_1.getManager().getRepository(book_1.BookEntity);
                        return [4 /*yield*/, bookRepository.findOne(id)];
                    case 1:
                        bookEntity = _a.sent();
                        if (!bookEntity) {
                            res.status(404).send({ error: "Book not found: " + id });
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, bookRepository.delete(id)];
                    case 2:
                        _a.sent();
                        res.send({ success: "Book has been deleted with id: " + id });
                        return [2 /*return*/];
                }
            });
        });
    };
    BookController.prototype.updateBook = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var id, bookRepository, bookEntity, bookDto, updatedBook;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        bookRepository = typeorm_1.getManager().getRepository(book_1.BookEntity);
                        return [4 /*yield*/, bookRepository.findOne(id)];
                    case 1:
                        bookEntity = _a.sent();
                        if (!bookEntity) {
                            res.status(404).send({ error: "Book not found: " + id });
                            return [2 /*return*/];
                        }
                        bookDto = ObjectMapper_1.ObjectMapper.mapFromRequest(req.body);
                        updatedBook = ObjectMapper_1.ObjectMapper.mapToEntity(bookDto);
                        updatedBook.id = id;
                        return [4 /*yield*/, bookRepository.update(id, updatedBook)];
                    case 2:
                        _a.sent();
                        res.json(bookDto);
                        return [2 /*return*/];
                }
            });
        });
    };
    BookController.prototype.listAllBooks = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var bookRepository, bookEntities, allBooks;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        bookRepository = typeorm_1.getManager().getRepository(book_1.BookEntity);
                        return [4 /*yield*/, bookRepository.find()];
                    case 1:
                        bookEntities = _a.sent();
                        allBooks = bookEntities.map(function (x) { return ObjectMapper_1.ObjectMapper.mapToDto(x); });
                        res.json(allBooks);
                        return [2 /*return*/];
                }
            });
        });
    };
    return BookController;
}());
exports.BookController = BookController;
//# sourceMappingURL=bookController.js.map