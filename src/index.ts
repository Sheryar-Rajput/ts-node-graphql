// src/index.ts

import express from "express";
import { ApolloServer } from "apollo-server-express";
import { PrismaClient } from "@prisma/client";
import { typeDefs } from "./graphql/schema";
import { resolvers } from "./graphql/resolvers";

const prisma = new PrismaClient();
const app = express();

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: { prisma },
  });

  await server.start(); // Ensure that the server is started before applying middleware

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () => {
    console.log("Server is running at http://localhost:4000/graphql");
  });
}

startApolloServer().catch((err) => {
  console.error("Error starting Apollo Server:", err);
});
