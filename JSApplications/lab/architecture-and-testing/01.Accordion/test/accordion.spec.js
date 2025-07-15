import { chromium } from "playwright-chromium";

let browser, page;

describe("Test", async () => {
  before(async () => {
    browser = await chromium.launch();
  });
  after(async () => {
    browser.close();
  });

  beforeEach(async () => {
    page = browser.newPage;
  });

  afterEach(async () => {
    await page.close();
  });

  it("should be test", () => {});
});
