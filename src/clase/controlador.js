//controlador de rutas
//importar router
import { Router } from "express";
//importar el servicio
import  ClaseService  from "./servicio.js";
const router = Router();

//definir api REST
const claseService = new ClaseService();


router.get('/', async (req, res) => {
    const clases = await claseService.getAll();
    res.json(clases);
});

router.post('/', async (req, res)=> {
    const clase = await claseService.create(req.body);
    res.json(clase);
});

router.get('/:id', async (req, res) =>{
    const clase = await claseService.getById(req.params.id);
    res.json(clase);
});

router.put('/:id', async (req, res) => {
    const clase = await claseService.update(req.params.id. req.body);
    res.json(clase);
});

router.delete('/:id', async (req, res) => {
    const clase = await claseService.delete(req.params.id);
    res.json(clase);
});

export default router;