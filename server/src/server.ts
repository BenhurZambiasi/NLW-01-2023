import Fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import cors from "@fastify/cors";
const app = Fastify();
const prisma = new PrismaClient();

app.register(cors, {
  origin: "http://localhost:3000",
});

app.get("/", async () => {
  const habits = await prisma.habit.findMany();
  return habits;
});

app
  .listen({ port: 3333 })
  .then(() => console.log("Server running on port 3333"));
