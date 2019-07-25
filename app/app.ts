import * as express from "express";
import {Request, Response} from "express";
import * as bodyParser from  "body-parser";
import { BookValidator } from "./services/validatorService";
import { Book } from "./models/Book";
import { bookRoutes } from "./routes/bookRoutes";


const app = express();
app.use(bodyParser.json());


bookRoutes(app);


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