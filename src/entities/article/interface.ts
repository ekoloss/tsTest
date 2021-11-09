import { Types } from 'mongoose';

export interface ArticleId {
  _id?: Types.ObjectId | string;
}

export interface Article extends ArticleId {
  title: string;
  description: string;
  mainText: string;
  categoryId: Types.ObjectId|string;
  isDeleted?: boolean;
}

export interface ArticleCount {
  entities: Article[];
  total: number;
}
//
// export interface RecipeValidateCreate {
//   title: {
//     type: string;
//     required?: boolean;
//     length?: {
//       min: number;
//       max: number;
//     }
//   };
//   description: {
//     type: string;
//     required?: boolean;
//   };
//   categoryId: {
//     type: string;
//     required: boolean;
//   };
// }
// export interface RecipeValidateBody {
//   title: { type: string};
//   description: {type: string};
// }
