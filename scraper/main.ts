import { CarDataScraper } from "./scraper";
import { CarDataPersister } from "./persister";
import { logger } from "../common/logger";
import { dataExists } from "../common/db";

async function data_exists(): Promise<boolean> {
  logger.info("Checking if data exists (noop)");
  return await dataExists();
}

// class CarDataPersister {
//   async save(data: Record<string, Record<string, string[]>>): Promise<void> {
//     logger.info("Pretending to save data (noop)");
//     // logger.info(JSON.stringify(data, null, 2));
//   }
// }

// ──────── Main Entry Point ────────

async function main() {
  console.log("🚀 Scraper is Ready");

  if (await data_exists()) {
    logger.info(
      "✅ Our database already has the data we need. No need to scrape",
    );
    return;
  }

  const scraper = new CarDataScraper();
  const start = performance.now();

  const makes = await scraper.getMakes();

  // Fetch all models in parallel
  const modelTasks = makes.map(async ([makeName, makeUrl]) => {
    const models = await scraper.getModels(makeUrl);
    return [makeName, models] as const;
  });

  const modelResults = await Promise.all(modelTasks);

  const partsTasks: Array<Promise<[string, string, string[]]>> = [];

  for (const [make, models] of modelResults) {
    for (const [modelName, modelUrl] of models) {
      partsTasks.push(
        scraper
          .getParts(modelUrl)
          .then((parts) => [make, modelName, parts] as const),
      );
    }
  }

  const partsResults = await Promise.all(partsTasks);

  const allParts: Record<string, Record<string, string[]>> = {};

  for (const [make, model, parts] of partsResults) {
    if (!allParts[make]) {
      allParts[make] = {};
    }
    allParts[make][model] = parts;
  }

  const end = performance.now();
  const elapsed = ((end - start) / 1000).toFixed(2);
  logger.info(`📊 Scraping + saving completed in ${elapsed} seconds`);

  const persister = new CarDataPersister();
  logger.info("💾 Saving to DB (noop)...");
  await persister.save(allParts);
}

main().catch((err) => {
  console.error("❌ An error occurred during scraping:", err);
});
