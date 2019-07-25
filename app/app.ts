import * as express from "express";
import * as bodyParser from  "body-parser";
import { bookRoutes } from "./routes/bookRoutes";
import { ConnectionOptions, createConnection, getManager } from "typeorm";
import { BookEntity } from "./dbmodels/book";


const options: ConnectionOptions = {
    type: "sqlite",
    database: `data.sqlite`,
    entities: [ BookEntity ],
    logging: true,
    synchronize :true
    
}

createConnection(options).then(async connection => {
    const app = express();
    app.use(bodyParser.json());
    bookRoutes(app);
    app.listen(3000, function () {
        console.log('Book store  app listening on port 3000!');
    });
}).catch(error => console.log("TypeORM connection error: ", error));




