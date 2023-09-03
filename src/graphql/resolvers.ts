// src/graphql/resolvers.ts

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const resolvers = {
  Query: {
    users: async () => {
      return prisma.user.findMany();
    },
    user: async (_: any, { id }: { id: number }) => {
      return prisma.user.findUnique({ where: { id } });
    },
    posts: async () => {
      return prisma.post.findMany();
    },
    post: async (_: any, { id }: { id: number }) => {
      return prisma.post.findUnique({ where: { id } });
    },
  },
  Mutation: {
    createUser: async (
      _: any,
      { username, email }: { username: string; email: string }
    ) => {
      return prisma.user.create({
        data: {
          username,
          email,
        },
      });
    },
    createPost: async (
      _: any,
      {
        title,
        content,
        userId,
      }: { title: string; content: string; userId: number }
    ) => {
      return prisma.post.create({
        data: {
          title,
          content,
          userId,
        },
      });
    },
  },
};
