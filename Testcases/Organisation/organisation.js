describe('Add organisation child section', function () {
  var EC = protractor.ExpectedConditions;
  var randNumber = browser.params.user.random;

  it('Add new organisation child section under the organisation document', function () {
    browser.sleep(3000);
    browser.executeScript('window.scrollTo(0,4000);').then(function () {
      browser.sleep(2000);
      var organisation = element(by.xpath('//article[@class="framework-grid-content OrganisationSection"]//a//*[@id="Layer_1"]'));
      organisation.click();
    })
    browser.sleep(2000);
    var addbtn = element(by.xpath('//i[@class="fa fa-bars"]'));
    addbtn.isPresent().then(function (present) {
      if (present) {
        addbtn.click();
      }
      browser.sleep(2000);
      element(by.xpath('//span[contains(text(),"Add")]')).click();

    });
    browser.sleep(1000);
    //browser.actions().mouseMove(element(by.xpath('//div[@id="roadmaps"]//div[1]'))).perform();
    // browser.sleep(2000);
    element(by.xpath('//input[@placeholder="Enter title"]')).clear().sendKeys(randNumber);
    element(by.xpath('//a[@class="btn btn-save"]')).click();
    browser.sleep(2000);
    expect(browser.getTitle()).toContain('STARIDAZ : Organisations');
    browser.sleep(3000);
    element(by.linkText('IRC Research Roadmaps test')).click();
    browser.sleep(2000);
  });


});