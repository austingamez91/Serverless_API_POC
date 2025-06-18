// src/scraper/CarDataScraper.ts
import axios, { AxiosInstance } from "axios";
import { load, CheerioAPI } from "cheerio";
import { Element } from "domhandler";

const BASE_URL = "https://www.urparts.com/";
const CATALOGUE_URL = `${BASE_URL}index.cfm/page/catalogue`;

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function withRetry<T>(
  fn: () => Promise<T>,
  attempts = 5,
  minDelay = 1000,
  maxDelay = 10000,
): Promise<T | null> {
  let tryCount = 0;
  while (tryCount < attempts) {
    try {
      return await fn();
    } catch (err) {
      tryCount++;
      const delay = Math.min(minDelay * 2 ** (tryCount - 1), maxDelay);
      console.error(`Attempt ${tryCount} failed, retrying in ${delay}ms…`);
      await sleep(delay);
    }
  }
  console.error("All retries failed.");
  return null;
}

export class CarDataScraper {
  client: AxiosInstance;

  constructor(client?: AxiosInstance) {
    this.client = client ?? axios.create({ timeout: 10000 });
  }

  private async fetchHtml(url: string): Promise<CheerioAPI | null> {
    return withRetry(async () => {
      const res = await this.client.get<string>(url);
      const html = res.data;
      return load(html);
    });
  }

  private extractLink($, el: Element): [string, string] {
    const link = $(el);
    const name = link.text().trim();
    const href = link.attr("href") ?? "";
    const full = new URL(href, BASE_URL).toString();
    return [name, full];
  }

  async getMakes(): Promise<Array<[string, string]>> {
    const $ = await this.fetchHtml(CATALOGUE_URL);
    if (!$) return [];
    const container = $("div.c_container.allmakes");
    if (!container.length) {
      console.warn("No makes container found!");
      return [];
    }
    // console.log($)
    return container
      .find("li a")
      .toArray()
      .map((el) => this.extractLink($, el));
  }

  async getModels(makeUrl: string): Promise<Array<[string, string]>> {
    const $ = await this.fetchHtml(makeUrl);
    if (!$) return [];
    const container = $("div.c_container.allmakes.allcategories");
    return container
      .find("li a")
      .toArray()
      .map((el) => this.extractLink($, el));
  }

  async getParts(modelUrl: string): Promise<string[]> {
    const $ = await this.fetchHtml(modelUrl);
    if (!$) return [];
    const container = $("div.c_container.allmodels");
    return container
      .find("li a")
      .toArray()
      .map((el) => $(el).text().trim());
  }
}
