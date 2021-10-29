// // External Dependencies
// import { mongo } from "config";
// import * as dotenv from "dotenv";
// import fs from "fs";
// import * as mongoDB from "mongodb";
// import path from "path";
//
// // Global Variables
// export const collections: {} = {};
//
// // Initialize Connection
// export async function connectToDatabase() {
//     dotenv.config();
//
//     const client: mongoDB.MongoClient = new mongoDB.MongoClient(mongo.url);
//
//     await client.connect();
//
//     const db: mongoDB.Db = client.db(mongo.dbName);
//
//     await db.command();
//
//     const gamesCollection: mongoDB.Collection = db.collection(process.env.GAMES_COLLECTION_NAME);
//     const adad = ["games"];
//     collections[adad[0]] = gamesCollection;
//
//     console.log(`Successfully connected to database: ${db.databaseName} and collection: ${gamesCollection.collectionName}`);
// }
