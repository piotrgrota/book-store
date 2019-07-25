import {Validator, validate} from "class-validator";
import { Book } from "../models/Book";


export class BookValidator{
    internalValidator: Validator;
    constructor(){
        this.internalValidator = new Validator();
    }
    //easy way to change internal validator without changing the external call
    isValidISBN(isbnNumber:string): boolean {
        //assuming we are only supporting version 13
        return this.internalValidator.isISBN(isbnNumber, "13");
    }

}