import { model, Schema } from "mongoose";

export interface User {
    name: string;
    email: string;
    avatar?: string;
}

export const schema = new Schema<User>({
    avatar: String,
    email: { type: String, required: true },
    name: { type: String, required: true },
});

export default model<User>("User", schema);


