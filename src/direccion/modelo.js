import { Router } from "express";
import DireccionController from "./controlador.js";

const router = Router();

router.use("/direccion", DireccionController);

export default router;