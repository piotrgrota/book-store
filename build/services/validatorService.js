"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var class_validator_1 = require("class-validator");
var BookValidator = /** @class */ (function () {
    function BookValidator() {
        this.internalValidator = new class_validator_1.Validator();
    }
    //easy way to change internal validator without changing the external call
    BookValidator.prototype.isValidISBN = function (isbnNumber) {
        //assuming we are only supporting version 13
        return this.internalValidator.isISBN(isbnNumber, "13");
    };
    return BookValidator;
}());
exports.BookValidator = BookValidator;
//# sourceMappingURL=validatorService.js.map