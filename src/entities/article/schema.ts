import { model, Schema } from "mongoose";

export interface Article {
    name: string;
    email: string;
    avatar?: string;
}

export const schema = new Schema<Article>({
    avatar: String,
    email: { type: String, required: true },
    name: { type: String, required: true },
});

export default model<Article>("Article", schema);
