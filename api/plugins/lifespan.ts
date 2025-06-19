import { FastifyInstance } from "fastify";
import { dataExists } from "../../common/db";
import { logger } from "../../common/logger";
import fp from "fastify-plugin";

async function lifespanPlugin(app: FastifyInstance) {
  const maxRetries = 30;
  const delay = 2000;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    const ready = await dataExists();
    if (ready) {
      logger.info("The data exists!");
      return;
    }
    logger.info(`Waiting for data... attempt ${attempt + 1}/${maxRetries}`);
    await new Promise((res) => setTimeout(res, delay));
  }

  logger.error("Data did not become available in time. Failing startup.");
  throw new Error("Startup aborted due to missing data");
}


export default fp(lifespanPlugin, {
  name: "lifespan",
});