import { Router } from "express";
import NivelController from "./controlador.js";

const router = Router();

router.use("/nivel", NivelController);

export default router;