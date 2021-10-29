import * as dotenv from "dotenv";
import { connect } from "mongoose";
import {parse} from "../services/crawler";
dotenv.config();

class Mongo {

    public async init() {
        await connect(process.env.DB_CONN_STRING);
        console.log("MongoConnected");

        parse("entities", "schema");
        console.log("Created models in DB");
    }

}

export default new Mongo();
