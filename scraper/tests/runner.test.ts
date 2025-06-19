// tests/scraper/runner.test.ts
import { describe, it, expect, vi } from "vitest";
import { runScraper } from "../../scraper/runner";

describe("runScraper", () => {
  it("skips scraping if dataExists returns true", async () => {
    const mockScraper = {
      getMakes: vi.fn(),
      getModels: vi.fn(),
      getParts: vi.fn(),
    };

    const mockPersister = {
      save: vi.fn(),
    };

    const mockDataCheck = vi.fn().mockResolvedValue(true);

    await runScraper({
      scraper: mockScraper as any,
      persister: mockPersister as any,
      dataCheck: mockDataCheck,
    });

    expect(mockScraper.getMakes).not.toHaveBeenCalled();
    expect(mockPersister.save).not.toHaveBeenCalled();
  });

  it("scrapes and saves when data does not exist", async () => {
    const mockScraper = {
      getMakes: vi.fn().mockResolvedValue([["Toyota", "url1"]]),
      getModels: vi.fn().mockResolvedValue([["Camry", "url2"]]),
      getParts: vi.fn().mockResolvedValue(["Engine", "Brakes"]),
    };

    const mockPersister = {
      save: vi.fn().mockResolvedValue(undefined),
    };

    const mockDataCheck = vi.fn().mockResolvedValue(false);

    await runScraper({
      scraper: mockScraper as any,
      persister: mockPersister as any,
      dataCheck: mockDataCheck,
    });

    expect(mockScraper.getMakes).toHaveBeenCalled();
    expect(mockScraper.getModels).toHaveBeenCalledWith("url1");
    expect(mockScraper.getParts).toHaveBeenCalledWith("url2");

    expect(mockPersister.save).toHaveBeenCalledWith({
      Toyota: {
        Camry: ["Engine", "Brakes"],
      },
    });
  });
});
