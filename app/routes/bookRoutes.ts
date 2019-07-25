import { Application } from "express";
import { BookController } from "../controllers/bookController";

export function bookRoutes(app: Application){
    const controller = new BookController();

    app.route("/books")
        .get(controller.listAllBooks)
        .post(controller.createBook)

    app.route("/books/:isbn")
        .put(controller.updateBook)
        .delete(controller.deleteBook)

}