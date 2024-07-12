import Clase from "./entidades/ClaseEntity.js";

export class ClaseService {
    constructor(){
        this.claseRepository = Clase;
    }

    async getAll() {
        try {
            const clases = await this.claseRepository.findAll();
            return clases
        } catch (error) {
            throw new Error(error);
        }
    }


    async getById(id) {
        try{
            return await this.claseRepository.findByPk(id);
        } catch (error){
            throw new Error(error);
        }
    }


    async create(clase) {
        return await this.claseRepository.create(clase);
    }


    async update(id, clase) {
        return await this.claseRepository.update(clase, {
            where: {
                id
            }
        });
    }


    async delete(id) {
        return await this.claseRepository.destroy({where: {id}});
    }

}

export default ClaseService;