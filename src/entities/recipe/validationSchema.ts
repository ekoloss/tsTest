// import validator from '../../component/validator';
// import { RecipeValidateBody, RecipeValidateId } from './interface';
// import RecipeModel from './model';
//
// class RecipeValidate {
//   public recipeIdSchema: RecipeValidateId;
//   public mainSchema: RecipeValidateBody;
//
//   constructor() {
//     this.recipeIdSchema = {
//       _id: {
//         custom: async ( value, errors ): Promise<any> => {
//           const res = await RecipeModel.ifExist( value );
//           if ( !res ) {
//             errors.push( { type: 'noRecipe', actual: value, code: 404 } );
//             return value;
//           }
//           return value;
//         },
//         type: 'objectID',
//       },
//     };
//
//     this.mainSchema = {
//       description: { type: 'string' },
//       title: { type: 'string' },
//     };
//   }
//
//   public create( body ): Promise<boolean> {
//     return validator.create( body, {
//       ...this.mainSchema,
//     } );
//   }
//
//   public paginate( page, limit ) {
//     return validator.paginate( page, limit );
//   }
//
//   public existId( id ): Promise<boolean> {
//     return validator.existId( id, this.recipeIdSchema._id );
//   }
//
//   public update( body ): Promise<boolean> {
//     return validator.existFields( body, this.mainSchema, this.recipeIdSchema._id );
//   }
// }
//
// export default new RecipeValidate();
