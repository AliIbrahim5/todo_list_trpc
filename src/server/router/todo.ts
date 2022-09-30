import { createRouter } from "./context";
import { z } from "zod";

export const TodoRouter = createRouter()
  .query("get", {
    resolve: async ({ ctx }) => {
      const todos = await ctx.prisma.todo.findMany();
      return {
        todos,
      };
    },
  })
  .mutation("AddTodo", {
    input: z.object({
      name: z.string(),
      dec: z.string(),
    }),
    resolve: async ({ ctx, input }) => {
      return await ctx.prisma.todo.create({
        data: {
          name: input.name,
          dec: input.dec,
        },
      });
    },
  })
  .mutation("update", {
    input: z.object({
      id: z.string(),
      name: z.string(),
      dec: z.string(),
    }),
    resolve: async ({ ctx, input }) => {
      return await ctx.prisma.todo.update({
        where: {
          id: input.id,
        },
        data: {
          name: input.name,
          dec: input.dec,
        },
      });
    },
  })
  .mutation("delete", {
    input: z.string(),

    resolve: async ({ ctx, input }) => {
      return await ctx.prisma.todo.delete({
        where: {
          id: input,
        },
      });
    },
  });
