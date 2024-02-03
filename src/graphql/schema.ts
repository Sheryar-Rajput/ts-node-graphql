// src/graphql/schema.ts

import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    id: Int
    username: String
    email: String
    posts: [Post]
  }

  type Post {
    id: Int
    title: String
    content: String
    userId: String
    user: User
  }

  type Query {
    users: [User]
    user(id: Int!): User
    posts: [Post]
    post(id: Int!): Post
  }

  type Mutation {
    createUser(username: String!, email: String!): User
    updateUser(id: String!): User
    createPost(title: String!, content: String!, userId: Int!): Post
  }
`;
