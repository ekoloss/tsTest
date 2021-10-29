import bodyParser from "body-parser";
import config from "config";
import express from "express";
import path from "path";
import Mongo from './component/mongodb';
import { connectToDatabase } from "./services/database.service";

const app = express();
app.use(bodyParser.urlencoded({extended : false}));
const initPath = path.join(__dirname, "..", "entity");
console.log(initPath);
Mongo.init();

app.listen(config.http.port, () => {
    console.log(`Server started at http://localhost:${config.http.port}`);
});
// connectToDatabase()
//     .then(() => {
//         // app.use("/games", gamesRouter);
//         //
//         // app.listen(config.http.port, () => {
//         //     console.log(`Server started at http://localhost:${config.http.port}`);
//         // });
//     })
//     .catch((error: Error) => {
//         console.error("Database connection failed", error);
//         process.exit();
//     });
