import { prisma } from "../../common/db";

// Optionally type the return shape as CarMake[] if needed
export async function getAllMakes(name?: string, limit = 0, offset = 0) {
  return prisma.carMake.findMany({
    where: name ? { name: { contains: name, mode: "insensitive" } } : undefined,
    skip: offset || undefined,
    take: limit || undefined,
    orderBy: { name: "asc" },
  });
}

export async function getModelsByMake(
  makeId: number,
  name?: string,
  limit = 100,
  offset = 0,
) {
  return prisma.carModel.findMany({
    where: {
      makeId,
      ...(name && { name: { contains: name, mode: "insensitive" } }),
    },
    skip: offset || undefined,
    take: limit || undefined,
    orderBy: { name: "asc" },
  });
}

export async function getPartsByModel(
  modelId: number,
  name?: string,
  limit = 100,
  offset = 0,
) {
  return prisma.carPart.findMany({
    where: {
      modelId,
      ...(name && { name: { contains: name, mode: "insensitive" } }),
    },
    skip: offset || undefined,
    take: limit || undefined,
    orderBy: { name: "asc" },
  });
}

export async function getPartById(partId: number) {
  return prisma.carPart.findUnique({
    where: { id: partId },
  });
}
