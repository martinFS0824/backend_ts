"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API Docs',
        version: '1.0.0',
        description: 'Documentación de la API de libros',
    },
    servers: [
        {
            url: 'http://localhost:8080',
            description: 'Servidor de desarrollo',
        },
    ],
    schemas: {
        Book: {
            type: 'object',
            properties: {
                id: { type: 'string' },
                title: { type: 'string' },
                author: { type: 'string' },
                editor: { type: 'string' },
                edition: { type: 'number' },
                genre: { type: 'string' },
                img: { type: 'string' },
                description: { type: 'string' },
                info: { type: 'string' },
            },
            required: ['title', 'author', 'editor'],
        },
    },
};
const swaggerOptions = {
    swaggerDefinition,
    apis: ['./src/routes/*.ts'],
};
exports.default = (0, swagger_jsdoc_1.default)(swaggerOptions);
