import { model, Schema } from 'mongoose';
import { Article } from './interface';

export const schema = new Schema<Article>({
  categoryId: {
    index: true,
    required: true,
    type: Schema.Types.ObjectId,
  },
  description: { type: String, required: true },
  isDeleted: { type: 'boolean', default: false },
  mainText: { type: String, required: true },
  title: { type: String, required: true, index: true },
}, {
  versionKey: false,
});

export default model<Article>('Article', schema);
