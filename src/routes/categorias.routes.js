import {Router} from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";
/* creamos el enturador */
const router = Router();


/* get */
router.get("/", categoriaController.getCategorias);
router.post("/", categoriaController.postCategorias);

/* hacemos disponible a router a mi server web */

export default router;
