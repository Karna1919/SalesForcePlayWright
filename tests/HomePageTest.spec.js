import {test,expect} from '@playwright/test';
import {Homepage} from '../PageModels/HomePage';

test("HomePagetest", async ({ page }) => {
  const homepage = new Homepage(page, expect);

    const homepage = new Homepage(page,expect);

    await page.goto("https://www.salesforce.com/in/?ir=1");
    await homepage.homepageTest();


})
