// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { TodoRouter } from "./todo";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("todo.", TodoRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
