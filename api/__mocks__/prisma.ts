import { vi } from "vitest";

export const prisma = {
  carMake: {
    findMany: vi.fn(),
  },
  carModel: {
    findMany: vi.fn(),
  },
  carPart: {
    findMany: vi.fn(),
    findUnique: vi.fn(),
  },
};
