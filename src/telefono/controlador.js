import { Router } from "express";

import TelefonoService from './servicio.js';
const router = Router();

const telefonoService = new TelefonoService();

router.get('/', async (req, res) => {
    const telefono = await telefonoService.getAll();
    res.json(telefono);
});

router.post ('/', async (req, res) => {
    const telefono = await telefonoService.create(req.body);
    res.json(telefono);
});

router.get ('/:id', async (req, res) => {
    const telefono = await telefonoService.getById(req.params.id);
    res.json(telefono);
});

router.put ("/:id", async (req, res) => {
    const telefono = await telefonoService.update(req.params.id, req.body);
    res.json(telefono);
});

router.delete ('/:id', async (req, res) => {
    const telefono = await telefonoService.delete(req.params.id);
    res.json(telefono);
});


export default router;