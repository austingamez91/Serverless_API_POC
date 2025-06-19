import tracer from 'dd-trace';
tracer.init({
  logInjection: true,
  service: 'cars-api',
  env: 'production',
});
console.log('DD_SITE:', process.env.DD_SITE);
console.log('DD_TRACE_AGENT_URL:', process.env.DD_TRACE_AGENT_URL);
console.log('DD_API_KEY:', process.env.DD_API_KEY);

import Fastify from "fastify";
import { registerRoutes } from "./router/endpoints";
import lifespanPlugin from "./plugins/lifespan";
import { logger, loggerOptions } from "../common/logger";
logger.info("dd-trace enabled. Starting service.")
const app = Fastify({ logger: loggerOptions, ignoreTrailingSlash: true, pluginTimeout:0 });
const port = process.env.port ? parseInt(process.env.PORT) : 3000;

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
