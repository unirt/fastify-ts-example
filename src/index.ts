import { app } from "./api";

const PORT = process.env.PORT || 3000;
const fastify = app();

const startServer = async () => {
  try {
    await fastify.listen(PORT, "0.0.0.0");
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

startServer();
