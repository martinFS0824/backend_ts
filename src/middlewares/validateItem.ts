import { body } from 'express-validator';

export const validateItem = [
    body('title')
        .notEmpty().withMessage('El título es obligatorio')
        .isString().withMessage('El títulos debe ser un string'),
    body('author')
        .notEmpty().withMessage('El author es obligatorio')
        .isString().withMessage('El author debe ser un string'),
    body('editor')
        .notEmpty().withMessage('El editor es obligatorio')
        .isString().withMessage('El editor debe ser un string'),
    body('edition')
        .notEmpty().withMessage('Edition es obligatorio')
        .isNumeric().withMessage('Edition debe ser un número'),
    body('genre')
        .notEmpty().withMessage('El género es obligatorio')
        .isString().withMessage('El género debe ser un string'),
    // body('img')
    //     .notEmpty().withMessage('La imagen es obligatoria')
    //     .isString().withMessage('La imagen debe ser un string')  
]