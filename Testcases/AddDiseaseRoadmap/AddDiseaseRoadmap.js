let homepage = require('../AllObject/homepage');
const {
  add_document
} = require('../AllObject/homepage');
describe('Add Disease roadmap section', function () {
  var EC = protractor.ExpectedConditions;
  var randNumber = browser.params.user.random;
  const _ = require('lodash');

  it('search newly created disease roadmap document and then click on it', function () {
    browser.driver.manage().window().setSize(1366, 728);
    browser.sleep(2000);
    element.all(by.className('item Disease')).getText().then(function (txt) {
      // console.log('item diseases', txt);
      var disease =
        _.findIndex(txt, function (t) {
          return t.indexOf(randNumber) > -1;
        })
      console.log('disease added is', disease);
      element(by.xpath('//div[@id="disease"]//div[@class="grid grid-4 roadmap-grid"]/div[contains(.,"Disease Untitled DiseaseDisease' + randNumber + '")]')).click();
    })
  });

  it('Add new disease roadmap under the diseases document', function () {
    browser.sleep(2000);
    homepage.add_document();
    browser.sleep(1000);
    homepage.add_title.clear().sendKeys(randNumber);
    browser.sleep(2000);
    homepage.adddiseaseroadmap();
    browser.sleep(1000);
    element(by.xpath('//option[.="Untitled RoadmapRoadmap' + randNumber + '"]'));
    browser.sleep(1000);
    homepage.createdocument();
    browser.sleep(2000);
  });

  it('add lead document', function () {
    browser.executeScript('window.scrollTo(0,100);').then(function () {
      browser.sleep(1000);
      //   var diseaseroadmap = element(by.xpath('//div[@class="page-children"]//div[@class="grid framework-grid framework-grid-17"]/div[1]'));
      //   diseaseroadmap.click();
      // })
      element(by.xpath('//h3[.="Untitled RoadmapRoadmap' + randNumber + '"]')).click();
    })
    // var addbtn = element(by.xpath('//i[@class="fa fa-bars"]'));
    // addbtn.isPresent().then(function (present) {
    //   if (present) {
    //     addbtn.click();
    //   }
    browser.sleep(2000);
    element(by.xpath("//span[contains(.,'Add')]")).click();

    // });
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