import { Router } from "express";

import DireccionService from './servicio.js';
const router = Router();

const direccionService = new DireccionService();

router.get('/', async (req, res) => {
    const direccion = await direccionService.getAll();
    res.json(direccion);
});

router.post ('/', async (req, res) => {
    const direccion = await direccionService.create(req.body);
    res.json(direccion);
});

router.get ('/:id', async (req, res) => {
    const direccion = await direccionService.getById(req.params.id);
    res.json(direccion);
});

router.put ("/:id", async (req, res) => {
    const direccion = await direccionService.update(req.params.id, req.body);
    res.json(direccion);
});

router.delete ('/:id', async (req, res) => {
    const direccion = await direccionService.delete(req.params.id);
    res.json(direccion);
});


export default router;