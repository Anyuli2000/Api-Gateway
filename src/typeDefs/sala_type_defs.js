const { gql } = require('apollo-server');
const salaTypeDesfs = gql `

type SalaDetail {
    id: String!
    imagen: String!
    usernameAs: String!
    equipo1: String!
    equipo2: String!
    titulo: String!
    equipoA: [String]!
    equipoB: [String]!
    marcador1: Int!
    marcador2: Int!
    cuenta: Int!
    tarifa: String!
}

input SalaInput {
    id: String!
    imagen: String!
    usernameAs: String!
    equipo1: String!
    equipo2: String!
    titulo: String!
    equipoA: [String]!
    equipoB: [String]!
    marcador1: Int!
    marcador2: Int!
    cuenta: Int!
    tarifa: String!
}

input EditarSala{
    marcador1: Int!
    marcador2: Int!
}

type Query {

    salaById(salaId: String!): SalaDetail!
    terminarSala(salaId: String!): String
    deleteSala(salaId: String!): String
    

}

type Mutation {
    createSala(sala: SalaInput!): SalaDetail!
    editarSala(salaId: String!, sala:EditarSala!): SalaDetail!
    
}

`;
module.exports = salaTypeDesfs;