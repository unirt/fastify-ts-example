import fastify, { FastifyInstance } from "fastify";
import { IncomingMessage, Server, ServerResponse } from "http";

const server: FastifyInstance<
  Server,
  IncomingMessage,
  ServerResponse
> = fastify({
  logger: true,
});

export const app = () => {
  server.get("/ping", async (request, reply) => {
    return "pong\n";
  });

  return server;
};
