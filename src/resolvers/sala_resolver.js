const { find } = require("lodash");

const salaResolver = {
    Query: {
        salaById: async(_, { salaId }, { dataSources }) => {
            return dataSources.salaApi.salaById(salaId)
        },

        terminarSala: async (_, { salaId }, { dataSources }) =>{
            return dataSources.salaApi.terminarSala(salaId)
        },

        deleteSala: async (_, { salaId }, { dataSources }) =>{
            return dataSources.salaApi.deleteSala(salaId)
        }

        },
        Mutation: {
            createSala: async(_, { sala }, { dataSources}) => {
            return dataSources.salaApi.createSala(sala)      
        },

            editarSala: async(_, { salaId, sala }, { dataSources}) => {
                return dataSources.salaApi.editarSala(salaId, sala)
            }
    }
};
module.exports = salaResolver;