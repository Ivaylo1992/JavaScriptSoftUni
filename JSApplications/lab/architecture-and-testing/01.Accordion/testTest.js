import { chromium } from "playwright-chromium";
async () => {
  const browser = await chromium.launch();
  const page = browser.newPage();

  await page.goto("http");
};
