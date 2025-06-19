import { FastifyInstance } from "fastify";
import { dataExists } from "../../common/db";
import fp from "fastify-plugin";

// set up all lifecycle activities.
// and handle shutdowns.

async function lifespanPlugin(app: FastifyInstance) {
  app.addHook("onClose", async () => {
    app.log.info("Fastify shutting down gracefully.");
  });
  // hopefully this works
  ["SIGTERM", "SIGINT"].forEach((signal) => {
    process.on(signal, async () => {
      app.log.info(`☠️ Caught ${signal}. Goodbye cruel cloud~`);
      await app.close();
      process.exit(0);
    });
  });


  const maxRetries = 30;
  const delay = 2000;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    const ready = await dataExists();
    if (ready) {
      app.log.info("The data exists!");
      return;
    }
    app.log.info(`Waiting for data... attempt ${attempt + 1}/${maxRetries}`);
    await new Promise((res) => setTimeout(res, delay));
  }

  app.log.error("Data did not become available in time. Failing startup.");
  await app.close()
}


export default fp(lifespanPlugin, {
  name: "lifespan",
});