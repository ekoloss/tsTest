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


