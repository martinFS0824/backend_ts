import swaggerJsdoc, {OAS3Definition, OAS3Options} from 'swagger-jsdoc';

const swaggerDefinition : OAS3Definition = {
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

const swaggerOptions : OAS3Options = {
    swaggerDefinition,
    apis: ['./src/routes/*.ts'],
}

export default swaggerJsdoc(swaggerOptions);