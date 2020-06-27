describe('Add Disease roadmap section', function () {
  var EC = protractor.ExpectedConditions;
  var randNumber = browser.params.user.random;

  it('Add new disease roadmap under the diseases document', function () {
    browser.sleep(3000);
    browser.executeScript('window.scrollTo(0,200);').then(function () {
      browser.sleep(1000);
      var firstdisease = element(by.xpath('//div[@id="disease"]//div[@class="grid framework-grid framework-grid-17"]/div[1]'));
      firstdisease.click();
    });
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
  });

  it('add lead document', function () {
    browser.executeScript('window.scrollTo(0,100);').then(function () {
      browser.sleep(1000);
      //   var diseaseroadmap = element(by.xpath('//div[@class="page-children"]//div[@class="grid framework-grid framework-grid-17"]/div[1]'));
      //   diseaseroadmap.click();
      // })
      element(by.linkText('shortTitleDisease520')).click();
    })
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
    expect(browser.getTitle()).toContain('STARIDAZ : Untitled DiseaseRoadmap');
    element(by.linkText('IRC Research Roadmaps test')).click();
    browser.sleep(2000);
  })

});