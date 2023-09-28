import Telefono from "./entidades/TelefonoEntity.js";

class TelefonoService {
    constructor() {
        this.telefonoRepository = Telefono;
    }

    async getAll() {
        try {
            return await this.telefonoRepository.findAll();
        } catch (error) {
            throw new Error(error);
        }
    }

    async  getById(id){
        try {
            return await this.telefonoRepository.findByPk(id);
        } catch (error) { 
            throw new Error(error);
        }
    }

    async create (telefono) {
        return await this.telefonoRepository.create(telefono);
    }

    async update(id, telefono) {
        return await this.telefonoRepository.update(telefono, {
            where: {
                id
            }
        });
    }

    async delete(id) {
        return await this.telefonoRepository.destroy({where: {id}});
    }
}


export default TelefonoService;