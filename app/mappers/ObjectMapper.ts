import { Book } from "../models/Book";
import { BookEntity } from "../dbmodels/book";


//TODO remove it and use proper library called ObjectMapper
export class ObjectMapper{
    static mapToDto(bookEntity: BookEntity): Book {
        let book = new Book();
        book.isbn = bookEntity.isbn13;
        book.subTitle = bookEntity.subTitle;
        book.title = bookEntity.title;
        book.id = bookEntity.id;
        return book;
    }
    static mapToEntity(book: Book) : BookEntity {
        let bookEntity = new BookEntity();
        bookEntity.isbn13 = book.isbn;
        bookEntity.subTitle = book.subTitle;
        bookEntity.title = book.title;
        bookEntity.id = book.id;
        return bookEntity;
    }
    static mapFromRequest(body: any): Book {
        let book = new Book();
        book.isbn = body.isbn;
        book.subTitle = body.subTitle;
        book.title = body.title;
        return book;
    }
   
}