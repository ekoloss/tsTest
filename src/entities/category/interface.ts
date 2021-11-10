import { Mid } from '../../utils/commonIterface';

export interface CategoryId {
    _id?: Mid;
}

export interface Category extends CategoryId {
    name: string;
    parentCategoryId: Mid;
    isDeleted?: boolean;
}
