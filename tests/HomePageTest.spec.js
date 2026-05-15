import { test, expect } from "@playwright/test";
import { Homepage } from "../PageModels/HomePage";

test("HomePagetest", async ({ page }) => {
  const homepage = new Homepage(page, expect);

  await page.goto("https://www.salesforce.com/products/free-trial/developer/");
  await homepage.homepageTest();

  console.log("Sanjay here ");
});
