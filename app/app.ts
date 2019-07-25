import * as express from "express";
import {Request, Response} from "express";
import * as bodyParser from  "body-parser";
import { BookValidator } from "./services/validatorService";


// Create a new express application instance
const app = express();
app.use(bodyParser.json());

const validator = new BookValidator();

app.get('/books', function (req: Request, res: Response) {
  res.send('Hello World!');
});

app.post('/books', function (req: Request, res: Response) {
    res.send('Hello World!');
});

app.put('/books/:isbn', function (req: Request, res: Response) {
    var isbn = req.params.isbn;
    if(validator.isValidISBN(isbn))
    {
        res.status(404).send({ error: "Not found "+ isbn });
    }
    res.send('Hello World!');
});


app.delete('/books:isbn', function (req: Request, res: Response) {
    var isbn = req.params.isbn;
    if(validator.isValidISBN(isbn))
    {
        res.status(404).send({ error: "Not found "+ isbn });
    }
    else
    {
        res.send('Hello World!');
    }
    
});

app.listen(3000, function () {
  console.log('Book store  app listening on port 3000!');
});