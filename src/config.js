const graphQLOptions = {
  // Set the path for the GraphQL server
  baseEndpoint: '/',

  // Set the path for the GraphQL playground
  // This option can be removed to disable the playground route
  playgroundEndpoint: '/___graphql',

  // When a request's path isn't matched, forward it to the origin
  forwardUnmatchedRequestsToOrigin: false,

  // Enable debug mode to return script errors directly in browser
  debug: false,

  // Enable CORS headers on GraphQL requests
  // Set to `true` for defaults (see `utils/setCors`),
  // or pass an object to configure each header
  cors: true,
  // cors: {
  //   allowCredentials: 'true',
  //   allowHeaders: 'Content-type',
  //   allowOrigin: '*',
  //   allowMethods: 'GET, POST, PUT',
  // },

  // List of Services the Gateway will stich together.
  // Each service object format is below. The name must be unique.
  // { name: '', url: '' }
  serviceList: [],
}

module.exports = graphQLOptions;
