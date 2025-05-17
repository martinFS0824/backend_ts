import { NextFunction, Request, Response } from "express";


export const logger = (req: Request, res: Response, next: NextFunction) => {
    console.log(`[${new Date().toISOString()} - Petición: ${req.method} - Endpoint: ${req.url}]`);
    next();
    
}