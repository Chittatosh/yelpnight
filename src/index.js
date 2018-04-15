const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');
const express = require('express');
const resolvers = require('./resolvers');

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql', // the Prisma DB schema
      endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma DB service
      secret: process.env.PRISMA_SECRET, // taken from database/prisma.yml
      debug: true, // log all GraphQL queries & mutations
    }), // Values are set in .env
  }),
});

server.express.use(express.static('dist'));

const options = {
  endpoint: '/graphql',
  playground: '/playground',
};

server.start(options, ({ port }) =>
  console.log(`Server is running on http://localhost:${port}`),
);
