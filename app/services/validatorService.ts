import {Validator} from "class-validator";


export class BookValidator{
    internalValidator: Validator;
    constructor(){
        this.internalValidator = new Validator();
    }

    isValidISBN(isbnNumber:string): boolean {
        //assuming we are only supporting version 13
        return this.internalValidator.isISBN(isbnNumber, "13");
    }

}