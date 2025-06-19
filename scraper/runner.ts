// scraper/runner.ts
import { CarDataScraper } from "./scraper";
import { CarDataPersister } from "./persister";
import { logger } from "../common/logger";
import { dataExists } from "../common/db";

export async function runScraper({
  scraper = new CarDataScraper(),
  persister = new CarDataPersister(),
  dataCheck = dataExists,
} = {}) {
  logger.info("🚀 Scraper is Ready");

  if (await dataCheck()) {
    logger.info(
      "✅ Our database already has the data we need. No need to scrape",
    );
    return;
  }

  const start = performance.now();

  const makes = await scraper.getMakes();

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

  logger.info("💾 Saving to DB...");
  await persister.save(allParts);
}
