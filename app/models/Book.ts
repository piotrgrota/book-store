import { IsISBN} from "class-validator";

export class Book{
    
    @IsISBN("13")
    text:string;

    title: String;

    subTitle: String;

}



