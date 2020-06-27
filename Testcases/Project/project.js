describe('Add Project child section', function () {
  var EC = protractor.ExpectedConditions;
  var randNumber = browser.params.user.random;

  it('Add new Project child section under the Project document', function () {
    browser.sleep(3000);
    browser.executeScript('window.scrollTo(0,4000);').then(function () {
      browser.sleep(2000);
      var Project = element(by.xpath('//article[@class="framework-grid-content ProjectSection"]//a//*[@id="Layer_1"]'));
      Project.click();
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
    element(by.xpath('//div[@class="fluux-app"]//div[2]//div[1]//div[2]//div[1]//div[1]//div[2]//div[1]//div[1]//select[1]'));
    browser.sleep(1000);
    element(by.xpath('//option[contains(text(),' + randNumber + ')]')).click();
    browser.sleep(1000);
    element(by.xpath('//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//div[1]//div[1]//select[1]')).click();
    browser.sleep(1000);
    element(by.xpath('//option[contains(text(),' + randNumber + ')]')).click();
    browser.sleep(1000);
    element(by.xpath('//div[@class="panel-body"]//div[2]//div[1]//div[2]//div[1]//div[1]//select[1]')).click();
    browser.sleep(1000);
    element(by.xpath('//option[contains(text(),' + randNumber + ')]')).click();
    browser.sleep(1000);
    element(by.xpath('//a[@class="btn btn-save"]')).click();
    browser.sleep(2000);
    expect(browser.getTitle()).toContain('STARIDAZ : Projects');
    browser.sleep(3000);
    element(by.linkText('IRC Research Roadmaps test')).click();
    browser.sleep(2000);
  });



});