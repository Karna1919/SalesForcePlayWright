exports.Homepage = class Homepage {
  constructor(page, expect) {
    this.page = page;
    this.expect = expect;
    this.logoImage = this.page.locator(
      "//img[src='https://a.sfdcstatic.com/shared/images/c360-nav/salesforce-no-type-logo.svg']",
    );
  }

  async homepageTest() {
    // await this.expect(await this.logoImage).isVisible();
    await this.logoImage.click();
  }
};
