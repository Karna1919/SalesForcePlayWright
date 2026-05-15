exports.Homepage = class Homepage {

    constructor(page,expect) {
        this.page = page;
        this.expect = expect;
        this.logoImage =this.page.locator("//a[@href='https://www.salesforce.com/in/']");

    }

  async  homepageTest(){

    await this.logoImage.click();
  }
};
