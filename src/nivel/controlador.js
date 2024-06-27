import { Router } from "express";

import NivelService from './servicio.js';
const router = Router();

const nivelService = new NivelService();

router.get('/', async (req, res) => {
    const nivel = await nivelService.getAll();
    res.json(nivel);
});

router.post ('/', async (req, res) => {
    const nivel = await nivelService.create(req.body);
    res.json(nivel);
});

router.get ('/:id', async (req, res) => {
    const nivel = await nivelService.getById(req.params.id);
    res.json(nivel);
});

router.put ("/:id", async (req, res) => {
    const nivel = await nivelService.update(req.params.id, req.body);
    res.json(nivel);
});

router.delete ('/:id', async (req, res) => {
    const nivel = await nivelService.delete(req.params.id);
    res.json(nivel);
});


export default router;