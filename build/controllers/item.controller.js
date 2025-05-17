"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteItem = exports.updateItem = exports.createItem = exports.getItemsById = exports.getAllItems = void 0;
const libro_1 = require("../models/libro");
const axios_1 = __importDefault(require("axios"));
const getAllItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield libro_1.Libro.find();
        res.status(200).json({ items, statusCode: 200, msj: "ok" });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ statusCode: 400, msj: "Error al obtener los items" + error.message });
        }
        else {
            res.status(400).json({ statusCode: 400, msj: "Error al obtener los items" });
        }
    }
});
exports.getAllItems = getAllItems;
const getItemsById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const id = Number(req.params.id)
        const item = yield libro_1.Libro.findOne({ _id: req.params.id });
        if (item) {
            res.status(200).json(item);
        }
        else {
            res.status(404).json({ message: "No se encontró el ítem solicitado con el id: " + req.params.id });
        }
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ statusCode: 400, msj: "Error al obtener los items" + error.message });
        }
        else {
            res.status(400).json({ statusCode: 400, msj: "Error al obtener los items" });
        }
    }
});
exports.getItemsById = getItemsById;
const createItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, author, edition, editor, genre, img, description } = req.body;
        const { data } = yield axios_1.default.get(`https://www.googleapis.com/books/v1/volumes?q=${title}+inauthor:${author}`);
        const info = data.items[0].volumeInfo.description;
        const nuevoLibro = yield libro_1.Libro.create({ title, author, edition, editor, genre, img, description, info });
        res.status(201).json({ nuevoLibro, statusCode: 201, msj: "ok" });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ statusCode: 400, msj: "Error al crear item " + error.message });
        }
        else {
            res.status(400).json({ statusCode: 400, msj: "Error al crear item" });
        }
    }
});
exports.createItem = createItem;
const updateItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, author, edition, editor, genre, img, description } = req.body;
        const libroActualizado = yield libro_1.Libro.findByIdAndUpdate(req.params.id, { title, author, edition, editor, genre, img, description });
        res.status(200).json({ libroActualizado, statusCode: 200, msj: "ok" });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ statusCode: 400, msj: "Error al actualizar item " + error.message });
        }
        else {
            res.status(400).json({ statusCode: 400, msj: "Error al actualizar item" });
        }
    }
});
exports.updateItem = updateItem;
const deleteItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield libro_1.Libro.findByIdAndDelete(req.params.id);
        res.status(200).json({ statusCode: 200, msj: "ok" });
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).json({ statusCode: 400, msj: "Error al eliminar item " + error.message });
        }
        else {
            res.status(400).json({ statusCode: 400, msj: "Error al eliminar item" });
        }
    }
});
exports.deleteItem = deleteItem;
