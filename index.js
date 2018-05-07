'use strict';

const fs = require('fs')
const {GraphQLServer} = require('graphql-yoga');
const resolvers = require('./resolvers');

const typeDefs = fs.readFileSync('./typeDefs.graphql', 'UTF-8');
const server = new GraphQLServer({typeDefs, resolvers});


server.start(() => console.log('Service running on port 4k'));
