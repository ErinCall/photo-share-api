'use strict';

const fs = require('fs')
const {GraphQLServer} = require('graphql-yoga');
const resolvers = require('./resolvers');
const context = {
  photos: []
}

const typeDefs = fs.readFileSync('./typeDefs.graphql', 'UTF-8');
const server = new GraphQLServer({typeDefs, resolvers, context});

const options = {
  port: 4000,
  endpoint: '/graphql',
  playground: '/playground'
};

server.express.get('/', (req, res) =>
  res.end('Welcome! Photosharing is photocaring!')
);

const ready = () => console.log('Service running on port 4k')

server.start(options, ready);
