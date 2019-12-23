const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

const schema = require('./schema');
const resolvers = require('./resolvers');

const app = express();

const server = new ApolloServer({
  typeDefs: schema,
  resolvers: resolvers,
  // Context is where we can store authScope, dbCon, etc - so that resolvers can get access to the same.
  context: async ({ req }) => ({
    db: await mongoose.connect('mongodb://localhost/eisenhovermatrix')
  })
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 9000 }, () => {
  console.log('Apollo Server Running on http://localhost:9000/graphql');
});