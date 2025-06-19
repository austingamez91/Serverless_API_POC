import Fastify from "fastify";
import { registerRoutes } from "./router/endpoints";
import lifespanPlugin from "./plugins/lifespan";
import { loggerOptions } from "../common/logger";
const app = Fastify({ logger: loggerOptions, ignoreTrailingSlash: true, pluginTimeout:0 });
const port = process.env.port ? parseInt(process.env.PORT) : 3000;
app.log.info("Preparing To Launch!")
await app.register(lifespanPlugin);
registerRoutes(app);

const start = async () => {
  try {
    await app.listen({ port, host: "0.0.0.0" });
    app.log.info("Server running");
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
