/* Importamos al framework express */
import express from "express";
import categoriaRoutes from "./routes/categorias.routes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

/* Necesario para obtener ruta absoluta */
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/* asignamos a app toda funcionalidad para mi server web */
const app = express();

/* setear un puerto a mi web server */
app.set("port", 5000);

/* Middleware */
app.use(express.json());
app.use(cors());

/* Servir frontend automáticamente */
app.use(express.static(path.join(__dirname, "../../frontend")));

/* routes */
app.use("/api/categorias", categoriaRoutes);

/* hacemos disponible a mi server app para toda la aplicacion */
export default app;
