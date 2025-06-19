export function createCarService(prismaClient) {
  return {
    getAllMakes(name?: string, limit = 0, offset = 0) {
      return prismaClient.carMake.findMany({
        where: name ? { name: { contains: name, mode: "insensitive" } } : undefined,
        skip: offset || undefined,
        take: limit || undefined,
        orderBy: { name: "asc" },
      });
    },
    getModelsByMake(makeId: number, name?: string, limit = 100, offset = 0) {
      return prismaClient.carModel.findMany({
        where: {
          makeId,
          ...(name && { name: { contains: name, mode: "insensitive" } }),
        },
        skip: offset || undefined,
        take: limit || undefined,
        orderBy: { name: "asc" },
      });
    },
    getPartsByModel(modelId: number, name?: string, limit = 100, offset = 0) {
      return prismaClient.carPart.findMany({
        where: {
          modelId,
          ...(name && { name: { contains: name, mode: "insensitive" } }),
        },
        skip: offset || undefined,
        take: limit || undefined,
        orderBy: { name: "asc" },
      });
    },
    getPartById(partId: number) {
      return prismaClient.carPart.findUnique({
        where: { id: partId },
      });
    },
  };
}
