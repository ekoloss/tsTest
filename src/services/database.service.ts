// External Dependencies
import { mongo } from "config";
import * as dotenv from "dotenv";
import { connect } from "mongoose";

// Global Variables
// export const collections: { user?: any } = {};

// Initialize Connection
export async function connectToDatabase(): Promise<void> {
    dotenv.config();
    await connect(process.env.DB_CONN_STRING);

    console.log("MongoConnected");

    // await createModels();

    console.log("Created models in DB");

    // collections.user = require("../collections/user").default;

}
