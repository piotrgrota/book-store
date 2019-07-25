"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bookController_1 = require("../controllers/bookController");
function bookRoutes(app) {
    var controller = new bookController_1.BookController();
    app.route("/books")
        .get(function (req, resp) { return controller.listAllBooks(req, resp); })
        .post(function (req, resp) { return controller.createBook(req, resp); });
    app.route("/books/:id")
        .put(function (req, resp) { return controller.updateBook(req, resp); })
        .delete(function (req, resp) { return controller.deleteBook(req, resp); });
}
exports.bookRoutes = bookRoutes;
//# sourceMappingURL=bookRoutes.js.map