import { Mid } from '../../utils/commonIterface';

export interface ArticleId {
  _id?: Mid;
}

export interface Article extends ArticleId {
  title: string;
  description: string;
  mainText: string;
  categoryId: Mid;
  isDeleted?: boolean;
}

export interface ArticleCount {
  entities: Article[];
  total: number;
}
