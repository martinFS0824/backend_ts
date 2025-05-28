import mongoose, { Schema } from "mongoose";

export interface ICategory {
    name:string;
}

const categorySchema = new Schema<ICategory>(
    {
        name: { type: String, required: true, unique: true }
     },
    {timestamps: true} 
)

export const Category = mongoose.model("Category", categorySchema)
