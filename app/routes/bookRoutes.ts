import { Application } from "express";
import { BookController } from "../controllers/bookController";

export function bookRoutes(app: Application){
    const controller = new BookController();

    app.route("/books")
        .get((req,resp) => controller.listAllBooks(req, resp))
        .post((req,resp) => controller.createBook(req, resp))

    app.route("/books/:id")
        .put((req,resp) => controller.updateBook(req, resp))
        .delete((req,resp) => controller.deleteBook(req, resp))

}