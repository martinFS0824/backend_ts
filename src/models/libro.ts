import mongoose, { Schema } from "mongoose";

export interface ILibro {
    title: string;
    author: string;
    editor: string;
    edition: number;
    genre: string;
    img: string;
    description: string;
    info: string;
}

const libroSchema = new Schema<ILibro>(
    {
        title: { type: String, required: true},
        author: { type: String, required: true},
        editor: { type: String, required: true},
        edition: { type: Number},
        genre: { type: String },
        img: { type: String },
        description: { type: String },
        info: { type: String }
     },
    {timestamps: true} 
)

export const Libro = mongoose.model("Libro", libroSchema)