const accountResolver = require('./account_resolver');
const transactionResolver = require('./transaction_resolver');
const authResolver = require('./auth_resolver');
const salaResolver = require('./sala_resolver');
const lodash = require('lodash');
const resolvers = lodash.merge(accountResolver, transactionResolver, authResolver, salaResolver);
module.exports = resolvers;