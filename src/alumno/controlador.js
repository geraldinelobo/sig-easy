import { Router } from "express";
import  AlumnoService  from "./servicio.js";

const router = Router();

const alumnoService = new AlumnoService();

//definimos la api REST

router.get('/', async (req, res) => {
    const alumnos = await alumnoService.getAll();
    res.json(alumnos);
});

router.post('/', async (req, res)=> {
    const alumno = await alumnoService.create(req.body);
    res.json(alumno);
})

export default router;