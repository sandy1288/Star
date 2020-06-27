describe('Verify Roadmap section functionality', function () {
  var EC = protractor.ExpectedConditions;
  var randNumber = browser.params.user.random;
  var newrandom = browser.params.user.newrandom;

  it('add theme document under the roadmap section', function () {
    browser.sleep(3000);
    browser.executeScript('window.scrollTo(0,100);').then(function () {
      browser.sleep(1000);
      element(by.xpath('//div[@id="roadmaps"]//div[@class="grid framework-grid framework-grid-17"]//div[1]//article[1]')).click();
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
    element(by.xpath('//input[@placeholder="Enter title"]')).clear().sendKeys('theme' + randNumber);
    element(by.xpath('//input[@placeholder="Enter shortTitle"]')).clear().sendKeys('themeshorttitle' + randNumber);
    element(by.xpath('//a[@class="btn btn-save"]')).click();
    browser.sleep(2000);
    expect(browser.getTitle()).toContain('STARIDAZ : RoadmapRoadmap' + randNumber);
  });

  it('add new theme and add dependency on another theme', function () {
    var addbtn = element(by.xpath('//i[@class="fa fa-bars"]'));
    addbtn.isPresent().then(function (present) {
      if (present) {
        addbtn.click();
      }
      browser.sleep(2000);
      element(by.xpath('//span[contains(text(),"Add")]')).click();

    });
    browser.sleep(1000);
    element(by.xpath('//input[@placeholder="Enter title"]')).clear().sendKeys('theme1' + newrandom);
    element(by.xpath('//input[@placeholder="Enter shortTitle"]')).clear().sendKeys('themeshorttitle1' + newrandom);
    browser.sleep(1000);
    element(by.xpath('//div[@class="col-md-12"]/div/select[1]')).click();
    browser.sleep(1000);
    element(by.xpath('//option[contains(text(),' + randNumber + ')]')).click();
    element(by.xpath('//a[@class="btn btn-save"]')).click();
    browser.sleep(2000);
    expect(browser.getTitle()).toContain('STARIDAZ : RoadmapRoadmap' + randNumber);
  });

  it('add one more new theme and add dependency on another theme', function () {
    var addbtn = element(by.xpath('//i[@class="fa fa-bars"]'));
    addbtn.isPresent().then(function (present) {
      if (present) {
        addbtn.click();
      }
      browser.sleep(2000);
      element(by.xpath('//span[contains(text(),"Add")]')).click();

    });
    browser.sleep(1000);
    element(by.xpath('//input[@placeholder="Enter title"]')).clear().sendKeys('theme2' + randNumber);
    element(by.xpath('//input[@placeholder="Enter shortTitle"]')).clear().sendKeys('themeshorttitle2' + randNumber);
    browser.sleep(1000);
    element(by.xpath('//div[@class="col-md-12"]/div/select[1]')).click();
    browser.sleep(1000);
    element(by.xpath('//option[contains(text(),' + randNumber + ')]')).click();
    element(by.xpath('//a[@class="btn btn-save"]')).click();
    browser.sleep(2000);
    expect(browser.getTitle()).toContain('STARIDAZ : RoadmapRoadmap' + randNumber);
    element(by.linkText('IRC Research Roadmaps test')).click();
    browser.sleep(2000);
  })

});