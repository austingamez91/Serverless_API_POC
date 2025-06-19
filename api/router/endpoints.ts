import { FastifyInstance } from "fastify";
import { prisma } from "../../common/db";
import { createCarService } from "../services/carService";
const carService = createCarService(prisma);

export const registerRoutes = (app: FastifyInstance) => {
  app.head("/", async (req, reply) => {
    reply.code(200).send();
  });
  app.get("/", async (req, reply) => {
    reply.code(200).send();
  });

  app.get("/ping", async (req, reply) => {
    req.log.info("Ping route hit!");
    return { pong: true };
  });


  app.get("/health", async (req, reply) => {
    return { status: "ok" };
  });

  app.get("/makes", async (req, reply) => {
    const { name, limit, offset } = req.query as {
      name?: string;
      limit?: number;
      offset?: number;
    };

    const makes = await carService.getAllMakes(name, limit, offset);
    return makes;
  });

  app.get("/makes/:makeId/models", async (req, reply) => {
    const { makeId } = req.params as { makeId: string };
    const { name, limit, offset } = req.query as {
      name?: string;
      limit?: string;
      offset?: string;
    };
    const parsedLimit = limit ? parseInt(limit, 10) : undefined;
    const parsedOffset = offset ? parseInt(offset, 10) : undefined;

    const models = await carService.getModelsByMake(
      Number(makeId),
      name,
      parsedLimit,
      parsedOffset,
    );

    if (!models.length) {
      return reply.code(404).send({ detail: "No models found for this make" });
    }

    return models;
  });

  app.get("/models/:modelId/parts", async (req, reply) => {
    const { modelId } = req.params as { modelId: string };
    const { name, limit, offset } = req.query as {
      name?: string;
      limit?: string;
      offset?: string;
    };
    const parsedLimit = limit ? parseInt(limit, 10) : undefined;
    const parsedOffset = offset ? parseInt(offset, 10) : undefined;

    const parts = await carService.getPartsByModel(
      Number(modelId),
      name,
      parsedLimit,
      parsedOffset,
    );

    if (!parts.length) {
      return reply.code(404).send({ detail: "No parts found for this model" });
    }

    return parts;
  });

  app.get("/parts/:partId", async (req, reply) => {
    const { partId } = req.params as { partId: string };
    const part = await carService.getPartById(Number(partId));

    if (!part) {
      return reply.code(404).send({ detail: "Part not found" });
    }

    return part;
  });
};
