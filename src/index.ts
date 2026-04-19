import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// Rutas
// app.use("/api", warframeRouter);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});