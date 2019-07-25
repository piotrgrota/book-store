import {Request, Response} from "express";
import * as bodyParser from  "body-parser";
import { BookValidator } from "../services/validatorService";
import { Book } from "../models/Book";

export class BookController{
    validator: BookValidator;
    constructor(){
        this.validator = new BookValidator();
    }

    createBook(req: Request, res: Response):void {

    }

    deleteBook(req: Request, res: Response): void {
        var isbn = req.params.isbn;
        if(!this.validator.isValidISBN(isbn))
        {
            res.status(404).send({ error: "Format of isbn book is invalid: "+ isbn });
            return;
        }
        else
        {
            res.send('Hello World!');
        }
    }
    
    updateBook(req: Request, res: Response): void {
        var isbn = req.params.isbn;
        if(!this.validator.isValidISBN(isbn))
        {
            res.status(404).send({ error: "Format of isbn book is invalid: "+ isbn });
            return;
        }
        res.send('Update!');
    }

    listAllBooks(req: Request, res: Response): void {
        var book = new Book("978-1-56619-909-4", "Title1", "Title1");
        res.json([book]);
    }

}