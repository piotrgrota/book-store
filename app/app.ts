import * as express from "express";
import {Request, Response} from "express";
import * as bodyParser from  "body-parser";

// Create a new express application instance
const app = express();
app.use(bodyParser.json());

app.get('/', function (req: Request, res: Response) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});