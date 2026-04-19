import express from "express";

const app = express();
const PORT = process.env.port;

// Configuración de Proxy
if (process.env.NODE_ENV === "production") app.set("trust proxy", 1);

// Middlewares
app.use(express.json());
// app.use(corsMiddleware());
// app.use(rateLimitMiddleware());

// Rutas
// app.use("/api", warframeRouter);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});