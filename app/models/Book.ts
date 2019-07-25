import { IsISBN} from "class-validator";
import {JsonProperty} from 'json-object-mapper'

export class Book{
    constructor(){

    }

    id:number;
    @IsISBN("13")
    isbn:string;
    title: string;
    subTitle: string;

}



