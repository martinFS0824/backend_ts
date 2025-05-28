import { Request, response, Response } from "express"
import { Libro } from "../models/libro"
import axios from 'axios'

export const getAllItems = async (req: Request, res: Response) => {
 try {
    const items = await Libro.find()
    res.status(200).json({items, statusCode: 200, msj:"ok"})
 } catch (error) {
    if (error instanceof Error) {
        res.status(400).json({statusCode: 400, msj: "Error al obtener los items" + error.message})    
    } else {
        res.status(400).json({statusCode: 400, msj: "Error al obtener los items"})
    }
 }
}

export const getItemsById = async (req: Request, res: Response) => {
    try {
        // const id = Number(req.params.id)
        const item = await Libro.findOne({_id: req.params.id})
        if (item) {
            res.status(200).json(item)
        }else {
            res.status(404).json({message: "No se encontró el ítem solicitado con el id: " + req.params.id})
        }
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({statusCode: 400, msj: "Error al obtener los items" + error.message})    
        } else {
            res.status(400).json({statusCode: 400, msj: "Error al obtener los items"})
        }  
     }
}

export const createItem = async (req: Request, res: Response) => {
    try {
       const { title, author, edition, editor, genre, img, description } = req.body;
       const {data} = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}`)
       const info = data.items[0].volumeInfo.description;
       const nuevoLibro = await Libro.create({ title, author, edition, editor, genre, img, description, info })
       res.status(201).json({ nuevoLibro, statusCode: 201, msj: "ok" })
    } catch (error) {
       if (error instanceof Error) {
           res.status(500).json({statusCode: 400, msj: "Error al crear item " + error.message})    
       } else {
           res.status(400).json({statusCode: 400, msj: "Error al crear item"})
       }
    }
   }

export const updateItem = async (req: Request, res: Response) => {
    try {
        const libroActualizado = await Libro.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.status(200).json({ libroActualizado, statusCode: 200, msj: "ok" })
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({statusCode: 400, msj: "Error al actualizar item " + error.message})    
        } else {
            res.status(400).json({statusCode: 400, msj: "Error al actualizar item"})
        }
    }
}

export const deleteItem = async (req: Request, res: Response) => {
    try {
        await Libro.findByIdAndDelete(req.params.id)
        res.status(200).json({statusCode:200, msj:"ok"})
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({statusCode: 400, msj: "Error al eliminar item " + error.message})    
        } else {
            res.status(400).json({statusCode: 400, msj: "Error al eliminar item"})
        }
    }
}