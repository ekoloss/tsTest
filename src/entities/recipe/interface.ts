import { ValidationError } from 'fastest-validator';
import { Types } from 'mongoose';

export interface RecipeId {
    _id?: Types.ObjectId | string;
}

export interface Recipe extends RecipeId {
    title: string;
    description: string;
    categoryId: Types.ObjectId|string;
    isDeleted?: boolean;
}

export interface RecipeCount {
    entities: Recipe[];
    total: number;
}

// export interface RecipeValidateId {
//     _id: {
//         type: Types.ObjectId|string;
//         custom: (value: string, errors: any) => Promise<string>
//     };
// }
// export interface RecipeValidateBody {
//     title: { type: string};
//     description: {type: string};
// }
export interface RecipeValidateCreate {
   title: {
       type: string;
       required?: boolean;
       length?: {
           min: number;
           max: number;
       }
   };
   description: {
       type: string;
       required?: boolean;
   };
   categoryId: {
       type: string;
       required: boolean;
   };
}
export interface RecipeValidateBody {
    title: { type: string};
    description: {type: string};
}
