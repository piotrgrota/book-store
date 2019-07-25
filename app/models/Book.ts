import { IsISBN} from "class-validator";

export class Book{
    constructor(isbn:string, title:string, subTitle:string){
        this.isbn = isbn;
        this.title = title;
        this.subTitle = subTitle;
    }

    @IsISBN("13")
    isbn:string;

    title: String;

    subTitle: String;

}



