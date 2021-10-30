import { model, Schema } from 'mongoose';

export interface Recipe {
  name: string;
  email: string;
  avatar?: string;
}

export const schema = new Schema<Recipe>({
  email: { type: String, required: true },
  name: { type: String, required: true },
});

export default model<Recipe>('Recipe', schema);
