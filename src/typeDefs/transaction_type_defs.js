const { gql } = require('apollo-server');
const transactionTypeDefs = gql `
type Transaction {
    id: String!
    cuentaOrigen: String!
    cuentaDestino: String!
    dinero: Int!
    equipo: String!
    date: String!
}
input TransactionInput {
    id: String!
    cuentaOrigen: String!
    cuentaDestino: String!
    dinero: Int!
    equipo: String!
}
extend type Query {
    transactionByUsername(username: String!): [Transaction]
}
extend type Mutation {
    createTransaction(transaction: TransactionInput!): Transaction
}
`;
module.exports = transactionTypeDefs;

