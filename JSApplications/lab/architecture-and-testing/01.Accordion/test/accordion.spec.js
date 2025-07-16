import { assert, expect } from "chai";
import { chromium } from "playwright-chromium";

let browser, page, buttonID;

describe("Test", async () => {
  before(async () => {
    browser = await chromium.launch({ headless: false, slowMo: 500 });
    buttonID = "ee9823ab-c3e8-4a14-b998-8c22ec246bd3";
  });
  after(async () => {
    await browser.close();
  });

  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
  });

  afterEach(async () => {
    await page.close();
  });

  it("should show the extra div when button is clicked", async () => {
    const isNotDivVisible = await page.isVisible(".extra");
    await page.click(`#${buttonID}`);

    const isDivVisible = await page.isVisible(".extra");

    assert.isTrue(isDivVisible);
    assert.isFalse(isNotDivVisible);
  });
  it("should change the button text when clicked", async () => {
    const moreButtonText = await page.textContent(`#${buttonID}`);

    await page.click(`#${buttonID}`);

    const lessButtonText = await page.textContent(`#${buttonID}`);

    assert.equal(moreButtonText, "More");
    assert.equal(lessButtonText, "Less");
  });
  it("should should expexted text in the p tag", async () => {
    const expectedText = `Scalable Vector Graphics (SVG)`;

    await page.click(`#${buttonID}`);

    let pTagText = await page.textContent("p");
    pTagText = pTagText.slice(0, 30);

    assert.equal(pTagText, expectedText);
  });
});
