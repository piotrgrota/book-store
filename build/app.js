"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var bookRoutes_1 = require("./routes/bookRoutes");
var app = express();
app.use(bodyParser.json());
bookRoutes_1.bookRoutes(app);
// app.get('/books', function (req: Request, res: Response) {
//   var book = new Book("978-1-56619-909-4","Title1","Title1");
//   res.json([book]);
// });
// app.post('/books', function (req: Request, res: Response) {
//     //var title =  new Book();
//     res.send('Hello World!');
// });
// app.put('/books/:isbn', function (req: Request, res: Response) {
//     var isbn = req.params.isbn;
//     if(!validator.isValidISBN(isbn))
//     {
//         res.status(404).send({ error: "Format of isbn book is invalid: "+ isbn });
//         return;
//     }
//     res.send('Hello World!');
// });
// app.delete('/books:isbn', function (req: Request, res: Response) {
//     var isbn = req.params.isbn;
//     if(!validator.isValidISBN(isbn))
//     {
//         res.status(404).send({ error: "Format of isbn book is invalid: "+ isbn });
//         return;
//     }
//     else
//     {
//         res.send('Hello World!');
//     }
// });
app.listen(3000, function () {
    console.log('Book store  app listening on port 3000!');
});
//# sourceMappingURL=app.js.map