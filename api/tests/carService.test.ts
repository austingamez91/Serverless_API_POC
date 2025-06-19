import { describe, it, expect, vi, beforeEach } from "vitest";
import {createCarService} from "../services/carService";
import { prisma } from "../__mocks__/prisma";

const service = createCarService(prisma);

// Override the actual import
vi.mock("../../src/common/db", () => ({ prisma }));

describe("carService", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("getAllMakes returns makes list", async () => {
    prisma.carMake.findMany.mockResolvedValue([
      { id: 1, name: "Toyota" },
      { id: 2, name: "Honda" },
    ]);

    const result = await service.getAllMakes();
    expect(prisma.carMake.findMany).toHaveBeenCalled();
    expect(result).toHaveLength(2);
    expect(result[0].name).toBe("Toyota");
  });

  it("getModelsByMake filters by makeId", async () => {
    prisma.carModel.findMany.mockResolvedValue([{ id: 10, name: "Civic" }]);

    const result = await service.getModelsByMake(2, "civ");
    expect(prisma.carModel.findMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          makeId: 2,
          name: expect.objectContaining({ contains: "civ" }),
        }),
      }),
    );
    expect(result[0].name).toBe("Civic");
  });

  it("getPartsByModel returns parts", async () => {
    prisma.carPart.findMany.mockResolvedValue([
      { id: 99, name: "Alternator" },
    ]);

    const result = await service.getPartsByModel(3);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBe("Alternator");
  });

  it("getPartById returns one part", async () => {
    prisma.carPart.findUnique.mockResolvedValue({ id: 99, name: "Alternator" });

    const result = await service.getPartById(99);
    expect(prisma.carPart.findUnique).toHaveBeenCalledWith({ where: { id: 99 } });
    expect(result?.name).toBe("Alternator");
  });
});
