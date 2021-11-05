import { model, Schema } from 'mongoose';
import { Recipe } from './interface';

export const schema = new Schema<Recipe>({
  categoryId: {
    index: true,
    required: true,
    type: Schema.Types.ObjectId,
  },
  description: { type: String, required: true },
  isDeleted: { type: 'boolean', default: false },
  title: { type: String, required: true, index: true },
}, {
  versionKey: false,
});

export default model<Recipe>('Recipe', schema);
