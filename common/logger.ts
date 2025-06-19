import pino from "pino";
import { Writable } from "stream";
import { request } from "undici";

const DD_API_KEY = process.env.DD_API_KEY;

export const loggerOptions: pino.LoggerOptions = {
  name: "car-parts",
  level: "info",
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      ignore: "pid,hostname",
      translateTime: "SYS:standard",
    },
  },
};

// Oooh this is hacky. But it saves us from creating a datadog agent
const prettyStream = pino.transport(loggerOptions.transport);

let destination = prettyStream;

if (DD_API_KEY) {
  const datadogStream = new Writable({
    write(chunk, _enc, cb) {
      request('https://http-intake.logs.us3.datadoghq.com/v1/input', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'DD-API-KEY': DD_API_KEY,
        },
        body: chunk,
      }).catch((err) => {
        console.error("❌ Datadog log send failed:", err);
      }).finally(() => cb());
    },
  });

  destination = pino.multistream([
    { stream: prettyStream },
    { stream: datadogStream },
  ]);
}

export const logger = pino(
  {
    name: loggerOptions.name,
    level: loggerOptions.level,
  },
  destination
);
