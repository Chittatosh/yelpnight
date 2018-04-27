const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');
const express = require('express');

const resolvers = require('./resolvers');
const htmlString = require('./htmlString');

require('pretty-error').start();

const server = new GraphQLServer({
  typeDefs: 'src/schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'src/generated/prisma.graphql', // the Prisma DB schema
      endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma DB service
      secret: process.env.PRISMA_SECRET, // taken from database/prisma.yml
      debug: false, // log all GraphQL queries & mutations
    }), // Values are set in .env
  }),
});

const logreq = (req, next, color) => {
  console.log(`\x1b[${color}m%s\x1b[0m`, req.url);
  next();
};
const app = server.express;
app.use((req, res, next) => logreq(req, next, '36'));
app.use(express.static('dist'));

app.get(['/', '/signin', '/createaccount'], (req, res) => res.send(htmlString));

const options = {
  endpoint: '/graphql',
  playground: '/playground',
};
server.start(options, ({ port }) =>
  console.log(`Server is running on http://localhost:${port}`),
);

app.use((req, res, next) => logreq(req, next, '31'));
