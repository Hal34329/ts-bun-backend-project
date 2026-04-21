import express from "express";
import { DEFAULTS } from "./config/defaults";
import { corsMiddleware } from "./middlewares/cors";
import { rateLimitMiddleware } from "./middlewares/rateLimit";
import { posRouter } from "./routes/posRouter";

const app = express();
const PORT = process.env.PORT || DEFAULTS.PORT;

// Middlewares
app.use(express.json());
app.use(corsMiddleware());
app.use(rateLimitMiddleware());

// Rutas
app.use("/api", posRouter);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});