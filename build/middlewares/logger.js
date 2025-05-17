"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const logger = (req, res, next) => {
    console.log(`[${new Date().toISOString()} - Petición: ${req.method} - Endpoint: ${req.url}]`);
    next();
};
exports.logger = logger;
