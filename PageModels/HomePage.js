exports.Homepage = class Homepage {

    constructor(page) {
        this.page = page;
        this.logoImage =this.page.locator("//a[@href='https://www.salesforce.com/in/']");

    }

  async  homepageTest(){

    await this.logoImage.isVisible();
    await this.logoImage.click();

    }
}