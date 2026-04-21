import { type RequestHandler } from "express";
import rateLimit from "express-rate-limit";

export const rateLimitMiddleware = (maxRequests = 100): RequestHandler => {
    return rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutos
        max: maxRequests,
        message: {
            error: "Demasiadas peticiones",
            message: "Has superado el límite de 100 peticiones en 15 minutos. Inténtalo más tarde.",
        },
        standardHeaders: true, // Retorna info del límite en las cabeceras `RateLimit-*`
        legacyHeaders: false, // Desactiva las cabeceras `X-RateLimit-*`
    });
};