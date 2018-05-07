'use strict';

const {GraphQLServer} = require('graphql-yoga');

const typeDefs = `
  type Query {
    lunch: String
  }
`;

const resolvers = {
  Query: {
    lunch: () => 'just a little bit ago'
  }
};

const server = new GraphQLServer({typeDefs, resolvers});
server.start(
  () => console.log('Service running on port 4k')
);
