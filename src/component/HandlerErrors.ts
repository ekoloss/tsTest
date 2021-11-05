// import { isArray, isString } from 'lodash';
//
// const itemHandler = (item) => {
//   if (isString(item)) {
//     return item;
//   }
//
//   return item.message;
// };
//
// // interface ErrorObject {
// //   message: string;
// //   [key: string]: any;
// // }
// // // {
// // //   categoryId: [ 'CategoryId not exist' ],
// // //     description: [ 'The description field is required.' ],
// // //   title: [ 'The title field is required.' ]
// // // }
// //
// // class ErrorsHandler  {
// //   public static make(errors, statusCode = 400, type) {
// //     let message;
// //     let data = errors;
// //     const result = [];
// //     if (isArray(errors)) {
// //       message = errors.reduce((acc, item) => {
// //         if (typeof item === 'string') {
// //           console.log('ssss');
// //         }
// //         console.log(item);
// //       }, []);
// //       console.log('message', errors);
// //     } else {
// //       message = [itemHandler(errors)];
// //       console.log('message', message);
// //       data = [errors];
// //       console.log('data', data);
// //     }
// //     return new ErrorsHandler(message, { statusCode, type, errors: data });
// //   }
// //
// //   public static throw(errors: string|string[]|ErrorObject|ErrorObject[], statusCode: number = 400, type: string= 'common') {
// //     throw ErrorsHandler.make(errors, statusCode, type);
// //   }
// //   public type: string;
// //   public statusCode: number;
// //   public errors: ErrorObject[];
// //
// //   constructor(message, { statusCode = 400, type = 'common', errors = [] } = {}) {
// //     this.type = type;
// //     this.statusCode = statusCode;
// //     this.errors = errors;
// //   }
//
// }
//
// export default ErrorsHandler;
