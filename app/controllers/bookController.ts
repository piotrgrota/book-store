import {Request, Response} from "express";
import { BookValidator } from "../services/validatorService";
import { Book } from "../models/Book";

import { ObjectMapper } from "../mappers/ObjectMapper";
import { BookEntity } from "../dbmodels/book";
import { getManager } from "typeorm";

export class BookController{
    validator: BookValidator;
    constructor(){
        this.validator = new BookValidator();
    }

    async createBook(req: Request, res: Response) {
        let book:Book =  ObjectMapper.mapFromRequest(req.body);
        if(!this.validator.isValidISBN(book.isbn)){
            res.status(404).send({ error: "Format of isbn book is invalid: "+ book.isbn });
            return;
        }
        const bookRepository = getManager().getRepository(BookEntity);
        let bookEntity:BookEntity =  ObjectMapper.mapToEntity(book);
        await bookRepository.insert(bookEntity);
        res.send({ message: "Book has been inserted with id: "+ bookEntity.id });
    }

    async deleteBook(req: Request, res: Response) {
        let id = req.params.id;
        const bookRepository = getManager().getRepository(BookEntity);
        const bookEntity = await bookRepository.findOne(id);
        if (!bookEntity) {
            res.status(404).send({ error: "Book not found with id: "+ id });
            return;
        }
        await bookRepository.delete(id);
        res.send({success: "Book has been deleted with id: " + id});
    }

    async updateBook(req: Request, res: Response){
        let id = req.params.id;
        const bookRepository = getManager().getRepository(BookEntity);
        const bookEntity = await bookRepository.findOne(id);
        if (!bookEntity) {
            res.status(404).send({ error: "Book not found with id: "+ id });
            return;
        }
        let bookDto = ObjectMapper.mapFromRequest(req.body);
        let updatedBook = ObjectMapper.mapToEntity(bookDto);
        updatedBook.id = id;
        await bookRepository.update(id, updatedBook);
        res.json(bookDto);
    }

    async listAllBooks(req: Request, res: Response) {
        const bookRepository = getManager().getRepository(BookEntity);
        let bookEntities = await bookRepository.find();
        let allBooks =  bookEntities.map(x => ObjectMapper.mapToDto(x));
        res.json(allBooks);
    }

}