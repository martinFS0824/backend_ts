"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const item_controller_1 = require("../controllers/item.controller");
const validateItem_1 = require("../middlewares/validateItem");
const handleValidation_1 = require("../middlewares/handleValidation");
const normalizeItem_1 = require("../middlewares/normalizeItem");
const router = (0, express_1.Router)();
/**
 * @swagger
 * /items:
 *   get:
 *     summary: Obtiene un listado de todos los libros
 *     tags: [Libros]
 *     responses:
 *       200:
 *         description: Lista de libros obtenida exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/schemas/Book'
 *       500:
 *         description: Error del servidor
 */
router.get("/", item_controller_1.getAllItems);
/**
 * @swagger
 * /items/{id}:
 *   get:
 *     summary: Obtiene un libro por su ID
 *     tags: [Libros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del libro
 *     responses:
 *       200:
 *         description: Libro encontrado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/schemas/Book'
 *       404:
 *         description: Libro no encontrado
 *       500:
 *         description: Error del servidor
 */
router.get("/:id", item_controller_1.getItemsById);
/**
 * @swagger
 * /items:
 *   post:
 *     summary: Crea un nuevo libro
 *     tags: [Libros]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/schemas/Book'
 *     responses:
 *       201:
 *         description: Libro creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/schemas/Book'
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error del servidor
 */
router.post("/", normalizeItem_1.normalizeItem, validateItem_1.validateItem, handleValidation_1.handleValidation, item_controller_1.createItem);
/**
 * @swagger
 * /items/{id}:
 *   put:
 *     summary: Actualizar un libro existente
 *     tags: [Libros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del libro
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/schemas/Book'
 *     responses:
 *       200:
 *         description: Libro actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/schemas/Book'
 *       404:
 *         description: Libro no encontrado
 *       400:
 *         description: Datos inválidos
 *       500:
 *         description: Error del servidor
 */
router.put("/:id", normalizeItem_1.normalizeItem, item_controller_1.updateItem);
/**
 * @swagger
 * /items/{id}:
 *   delete:
 *     summary: Eliminar un libro
 *     tags: [Libros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del libro
 *     responses:
 *       200:
 *         description: Libro eliminado exitosamente
 *       404:
 *         description: Libro no encontrado
 *       500:
 *         description: Error del servidor
 */
router.delete("/:id", item_controller_1.deleteItem);
exports.default = router;
