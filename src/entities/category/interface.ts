import { Types } from 'mongoose';

export interface CategoryId {
    _id?: Types.ObjectId | string;
}

export interface Category extends CategoryId {
    name: string;
    parentCategoryId: Types.ObjectId|string;
    isDeleted?: boolean;
}
