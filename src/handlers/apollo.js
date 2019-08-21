const { ApolloServer } = require('apollo-server-cloudflare');
const { ApolloGateway } = require("@apollo/gateway");
const { graphqlCloudflare } = require('apollo-server-cloudflare/dist/cloudflareApollo')
const graphQLOptions = require('../config')

const server = new ApolloServer({
  gateway: new ApolloGateway({
    serviceList: graphQLOptions.serviceList,
  }),
  subscriptions: false,
})

console.log(server)

const handler = (request, _graphQLOptions) =>
  graphqlCloudflare(() => server.createGraphQLServerOptions(request))(request)

module.exports = handler
