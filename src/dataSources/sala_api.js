const { RESTDataSource } = require('apollo-datasource-rest');
const serverConfig = require('../server');

class SalaApi extends RESTDataSource {
    constructor (){
        super();
        this.baseURL = serverConfig.account_api_url;
    }

    async createSala (sala){
        sala = new Object(JSON.parse(JSON.stringify(sala)));
        return await this.post('/salas/', sala)
    }

    async salaById (salaId){
        return await this.get (`/salas/${salaId}`);
    }

    async terminarSala (salaId){
        return await this.post (`/transactions/sala/${salaId}`);
    }


    async deleteSala (salaId){
        return await this.delete (`/salas/${salaId}`);
    }

    async editarSala (salaId, sala){
        sala = new Object(JSON.parse(JSON.stringify(sala)));
        return await this.put (`/salas/${salaId}`, sala);
    }
    
}
module.exports = SalaApi;