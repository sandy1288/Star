describe('Open Admin profile and add new user', function () {

  var EC = protractor.ExpectedConditions;
  var randNumber = browser.params.user.random;

  it('Verify that user is able to add new user', function () {
    expect(element(by.xpath('//i[@class="fa fa-bars"]')).isPresent()).toBe(true);
    browser.sleep(2000);
    var addbtn = element(by.xpath('//i[@class="fa fa-bars"]'));
    addbtn.isPresent().then(function (present) {
      if (present) {
        addbtn.click();
      }
      browser.sleep(2000);
      element(by.xpath('//a[@class="btn btn-secondary dropdown-toggle"]')).click();
      browser.sleep(1000);
      element(by.xpath('//a[contains(text(),"Admin Section")]')).click();
      browser.sleep(2000);
      element(by.xpath('//section[@class="media"]//div')).click();
      browser.sleep(2000);
      expect(browser.getTitle()).toEqual('STARIDAZ : Users');
      expect(element(by.xpath('//div[@class="form-control dropdown-toggle"]')).isPresent()).toBe(true);
    });
  });

  it('edit users detail page', function () {
    element(by.xpath('//a[@class="btn btn-secondary btn-edit"]')).click();
    browser.sleep(2000);
    expect(browser.getTitle()).toEqual('STARIDAZ : Users');
    element(by.xpath('//a[contains(text(),"Save")]')).click();
    browser.sleep(1000);
    expect(browser.getTitle()).toEqual('STARIDAZ : Users');
    browser.sleep(3000);
  });

  it('add new user', function () {
    element(by.xpath('//span[contains(text(),"Add")]')).click();
    browser.sleep(2000);
    element(by.xpath('//input[@placeholder="Enter title"]')).clear().sendKeys(randNumber);
    var email = element(by.xpath('//body[@class="framework-body framework-body-theme-staridaz"]//div[@class="create-document content framework-content"]//form/fieldset/div[@class="row column"]//div[@class="panel-body"]/div/div[@class="form-group"]/div[1]/input[1]'));
    email.clear().sendKeys(randNumber + '@test.com');
    element(by.xpath('//a[contains(text(),"Save")]')).click();
    browser.sleep(2000);
    expect(browser.getTitle()).toEqual('STARIDAZ : Users');
  });

});