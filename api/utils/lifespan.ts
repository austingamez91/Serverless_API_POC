import { FastifyInstance } from "fastify";
import { dataExists } from "../../common/db";
import { logger } from "../../common/logger";

export const registerLifespanHooks = (app: FastifyInstance) => {
  app.addHook("onReady", async () => {
    const maxRetries = 30;
    const delay = 2000; // ms

    for (let attempt = 0; attempt < maxRetries; attempt++) {
      const ready = await dataExists();
      if (ready) {
        logger.info("The data exists!");
        break;
      }
      logger.info(`Waiting for data... attempt ${attempt + 1}/${maxRetries}`);
      await new Promise((res) => setTimeout(res, delay));
    }

    if (!(await dataExists())) {
      logger.error("Data did not become available in time. Failing startup.");
      throw new Error("Startup aborted due to missing data");
    }

    logger.info("Houston, we have liftoff 🚀🚀🚀");
  });

  app.addHook("onClose", async () => {
    logger.info("App shutting down. Goodnight.");
    // Optional: add teardown logic here
  });
};
