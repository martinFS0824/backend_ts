import { Request, Response, NextFunction } from 'express';

export const normalizeItem = (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        const toNormalize = ['title', 'author', 'genre'];

        toNormalize.forEach(key => {
            if (body[key] && typeof body[key] === 'string') {
                let normalized = body[key].trim();
                normalized = normalized.toLowerCase();
                
                normalized = normalized.split(' ').map(word => {
                    return word.charAt(0).toUpperCase() + word.slice(1);
                }).join(' ');
                
                normalized = normalized.replace(/\.\s([a-z])/g, (match, letter) => {
                    return '. ' + letter.toUpperCase();
                });
                
                body[key] = normalized;
            }
        })
        
        req.body = body;
        next();
    } catch (error) {
        if (error instanceof Error) {
            res.status(500).json({statusCode: 500, msj: "Error en la normalización de los datos" + error.message})    
        } else {
            res.status(500).json({statusCode: 500, msj: "Error en la normalización de los datos"})
        }
    }
}