"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateItem = void 0;
const express_validator_1 = require("express-validator");
exports.validateItem = [
    (0, express_validator_1.body)('title')
        .notEmpty().withMessage('El título es obligatorio')
        .isString().withMessage('El títulos debe ser un string'),
    (0, express_validator_1.body)('author')
        .notEmpty().withMessage('El author es obligatorio')
        .isString().withMessage('El author debe ser un string'),
    (0, express_validator_1.body)('editor')
        .notEmpty().withMessage('El editor es obligatorio')
        .isString().withMessage('El editor debe ser un string'),
    (0, express_validator_1.body)('edition')
        .notEmpty().withMessage('Edition es obligatorio')
        .isNumeric().withMessage('Edition debe ser un número'),
    (0, express_validator_1.body)('genre')
        .notEmpty().withMessage('El género es obligatorio')
        .isString().withMessage('El género debe ser un string'),
    // body('img')
    //     .notEmpty().withMessage('La imagen es obligatoria')
    //     .isString().withMessage('La imagen debe ser un string')  
];
