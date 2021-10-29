// import fs from "fs";
// import path from "path";
//
// const parsePath = (postfix, callback) => {
//     const initPath = path.join(__dirname, '..', 'entity');
//     fs.readdirSync(initPath).forEach((name) => {
//         const itemPath = path.join(initPath, name);
//
//         if (!fs.existsSync(`${itemPath}/${postfix}`)) {
//             callback(require(`${itemPath}/${postfix}`)); /* eslint "import/no-dynamic-require": 0 */
//         }
//     });
// };
//
// class Bootstrap {
//
// }
//
// export default new Bootstrap();
