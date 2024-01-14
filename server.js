const express = require("express");

const { ApolloServer } = require("apollo-server-express");

const { makeExecutableSchema } = require("@graphql-tools/schema");
const { loadFilesSync } = require("@graphql-tools/load-files");

const app = express();

const typesArray = loadFilesSync("**/*", {
 extensions: ["graphql"],
});

const resolversArray = loadFilesSync("**/*", {
 extensions: ["resolvers.js"],
});

const startApolloServer = async () => {
 const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray,
 });
 const server = new ApolloServer({ schema });
 await server.start();
 server.applyMiddleware({ app });
 app.listen(3000, () => {
  console.log("Server listening on port 3000");
 });
};

startApolloServer();
