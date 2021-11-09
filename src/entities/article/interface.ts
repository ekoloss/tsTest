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
