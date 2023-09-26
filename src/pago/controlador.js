//controlador de rutas
//importar router
import { Router } from "express";
//importar el servicio
import  PagoService  from "./servicio.js";
const router = Router();

//definir api REST
const PagoService = new PagoService();


router.get('/', async (req, res) => {
    const pagos = await PagoService.getAll();
    res.json(pagos);
});

router.post('/', async (req, res)=> {
    const pago = await PagoService.create(req.body);
    res.json(pago);
});

router.get('/:id', async (req, res) =>{
    const pago = await PagoService.getById(req.params.id);
    res.json(pago);
});

router.put('/:id', async (req, res) => {
    const pago = await PagoService.update(req.params.id. req.body);
    res.json(pago);
});

router.delete('/:id', async (req, res) => {
    const pago = await PagoService.delete(req.params.id);
    res.json(pago);
});

export default router;