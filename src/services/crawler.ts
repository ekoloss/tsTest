import fs from "fs";
import path from "path";

export const collections: { item?: any } = {};

const base = (entity) => {
    return path.join(__dirname, `../${entity}`);
};

export const parse = (entityPath: string, goal) => {
    const res =  fs.readdirSync(base(entityPath));
    res.forEach((item) => {
        collections.item = require(`../entities/${item}/${goal}`).default;
    });
    return res;
};
