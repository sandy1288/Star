describe('Add Tag document', function () {
  var EC = protractor.ExpectedConditions;
  var randNumber = browser.params.user.random;

  it('Add new tag document under the Tag section', function () {
    browser.sleep(3000);
    browser.executeScript('window.scrollTo(0,2000);').then(function () {
      browser.sleep(2000);
      var addtag = element(by.xpath('//div[@class="grid framework-grid framework-grid-13"]//div[2]//h3[contains(text(),"Tag"+' + section + '+)]'));
      addtag.click();
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
    expect(browser.getTitle()).toContain('STARIDAZ : Countries');
    browser.sleep(3000);
    element(by.linkText('IRC Research Roadmaps test')).click();
    browser.sleep(2000);
  });



});