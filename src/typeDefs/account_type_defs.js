const { gql } = require('apollo-server');
const accountTypeDefs = gql `
    type Account {
        username: String!
        balance: Int!
        lastChange: String!
        apuestasExitosas: [String]!
        apuestasPerdidas: [String]!
        inversion: Int!
        activo: Int!
        activoNeto: Int!
        pasivo: Int!
        ultimaApuesta: Int!
        apuestasGanadas: Int!
        nivel: String!
    }
    extend type Query {
        accountByUsername(username: String!): Account
    }
`;
module.exports = accountTypeDefs;