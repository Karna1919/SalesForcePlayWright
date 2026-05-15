exports.Homepage = class Homepage {

    constructor(page) {
        this.page = page;
        this.logoImage =this.page.locator("//img[src='https://a.sfdcstatic.com/shared/images/c360-nav/salesforce-no-type-logo.svg']");

    }

  async  homepageTest(){

    await this.logoImage.isVisible();
    await this.logoImage.click();

    }
}