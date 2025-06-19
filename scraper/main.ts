import { runScraper } from "./runner";

runScraper().catch((err) => {
  console.error("An error occurred during scraping:", err);
});
