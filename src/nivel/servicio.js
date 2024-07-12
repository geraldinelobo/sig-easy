import Nivel from "./entidades/NivelEntity.js";

class NivelService {
    constructor() {
        this.nivelRepository = Nivel;
    }

    async getAll() {
        try {
            return await this.nivelRepository.findAll();
        } catch (error) {
            throw new Error(error);
        }
    }

    async  getById(id){
        try {
            return await this.nivelRepository.findByPk(id);
        } catch (error) { 
            throw new Error(error);
        }
    }

    async create (nivel) {
        return await this.nivelRepository.create(nivel);
    }

    async update(id, nivel) {
        return await this.nivelRepository.update(nivel, {
            where: {
                id
            }
        });
    }

    async delete(id) {
        return await this.nivelRepository.destroy({where: {id}});
    }
}


export default NivelService;