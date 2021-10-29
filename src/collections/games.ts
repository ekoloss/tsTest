export const games = {
    collectionName: "games",
    command: {
        collMod: "games",
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
    },
};
