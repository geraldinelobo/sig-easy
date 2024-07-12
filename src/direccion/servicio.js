import Direccion from "./entidades/DireccionEntity.js";

class DireccionService {
    constructor() {
        this.direccionRepository = Direccion;
    }

    async getAll() {
        try {
            return await this.direccionRepository.findAll();
        } catch (error) {
            throw new Error(error);
        }
    }

    async  getById(id){
        try {
            return await this.direccionRepository.findByPk(id);
        } catch (error) { 
            throw new Error(error);
        }
    }

    async create (direccion) {
        return await this.direccionRepository.create(direccion);
    }

    async update(id, direccion) {
        return await this.direccionRepository.update(direccion, {
            where: {
                id
            }
        });
    }

    async delete(id) {
        return await this.direccionRepository.destroy({where: {id}});
    }
}


export default DireccionService;