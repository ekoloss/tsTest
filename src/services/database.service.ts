// External Dependencies
import { mongo } from "config";
import * as dotenv from "dotenv";
import * as mongoDB from "mongodb";

// Global Variables
export const collections: { games?: mongoDB.Collection } = {};

// Initialize Connection
export async function connectToDatabase() {
    dotenv.config();

    console.log(mongo.url);
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(mongo.url);

    await client.connect();

    const db: mongoDB.Db = client.db(mongo.dbName);

    await db.command({
        collMod: process.env.GAMES_COLLECTION_NAME,
        validator: {
            $jsonSchema: {
                additionalProperties: false,
                bsonType: "object",
                properties: {
                    _id: {},
                    category: {
                        bsonType: "string",
                        description: "'category' is required and is a string",
                    },
                    name: {
                        bsonType: "string",
                        description: "'name' is required and is a string",
                    },
                    price: {
                        bsonType: "number",
                        description: "'price' is required and is a number",
                    },
                },
                required: ["name", "price", "category"],
            },
        },
    });

    const gamesCollection: mongoDB.Collection = db.collection(process.env.GAMES_COLLECTION_NAME);

    collections.games = gamesCollection;

    console.log(`Successfully connected to database: ${db.databaseName} and collection: ${gamesCollection.collectionName}`);
}
