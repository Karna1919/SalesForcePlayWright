import {test} from '@playwright/test';
import {Homepage} from '../PageModels/HomePage';

test("HomePagetest",async ({page}) => {

    const homepage = new Homepage(page);

    await page.goto("https://www.salesforce.com/in/?ir=1");
    await homepage.homepageTest();


})