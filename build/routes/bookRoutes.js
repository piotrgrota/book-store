"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bookController_1 = require("../controllers/bookController");
function bookRoutes(app) {
    var controller = new bookController_1.BookController();
    app.route("/book")
        .get(controller.listAllBooks)
        .post(controller.createBook);
    app.route("/books/:isbn")
        .put(controller.updateBook)
        .delete(controller.deleteBook);
}
exports.bookRoutes = bookRoutes;
//# sourceMappingURL=bookRoutes.js.map