import * as express from "express";
import * as bodyParser from  "body-parser";
import { bookRoutes } from "./routes/bookRoutes";


const app = express();
app.use(bodyParser.json());

bookRoutes(app);

app.listen(3000, function () {
  console.log('Book store  app listening on port 3000!');
});