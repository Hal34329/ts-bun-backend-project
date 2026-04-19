import express from "express";
import { DEFAULTS } from "./config/defaults";

const app = express();
const PORT = process.env.PORT || DEFAULTS.PORT;

// Middlewares
app.use(express.json());

// Rutas
// app.use("/api", warframeRouter);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});