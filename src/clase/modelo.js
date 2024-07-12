import  { Router } from "express";
import ClaseController from "./controlador.js";

const router = Router();

router.use("/clase", ClaseController);

export default router;