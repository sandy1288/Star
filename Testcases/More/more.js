describe('Star-Idaz More page', function () {

  var EC = protractor.ExpectedConditions;
  var randNumber = browser.params.user.random;

  it('Verify that More drop down should appear on clicking menu button', function () {
    expect(element(by.xpath('//i[@class="fa fa-bars"]')).isPresent()).toBe(true);
    browser.sleep(2000);
    element(by.xpath('//i[@class="fa fa-bars"]')).click();
    expect(element(by.xpath('//a[@class="btn btn-secondary dropdown-toggle"]')).isPresent()).toBe(true);
  });

  it('click on More button', function () {
    element(by.xpath('//a[@class="btn btn-secondary dropdown-toggle"]')).click();
    browser.sleep(1000);
    expect(element(by.partialLinkText('Profile')).isPresent()).toBe(true);
  });

  it('verify all the More options should appear under the drop down', function () {
    expect(element(by.partialLinkText('Profile')).isPresent()).toBe(true);
    expect(element(by.partialLinkText('Admin Section')).isPresent()).toBe(true);
    expect(element(by.partialLinkText('Moderation Public')).isPresent()).toBe(true);
    expect(element(by.xpath('//a[contains(text(),"Logout")]')).isPresent()).toBe(true);
  });

  it('Verify that user profile page should open on clicking profile option', function () {
    element(by.partialLinkText('Profile')).click();
    browser.sleep(2000);
    expect(browser.getTitle()).toEqual('STARIDAZ : Jaideep Das');
  });

  it('verify that admin users section should open on clicking admin option', function () {
    element(by.xpath('//a[@class="btn btn-secondary dropdown-toggle"]')).click();
    browser.sleep(2000);
    element(by.partialLinkText('Admin Section')).click();
    browser.sleep(2000);
    expect(browser.getTitle()).toEqual('STARIDAZ : Admin Section');
  });

  it('verify that Moderation public section should open on clicking admin option', function () {
    element(by.xpath('//a[@class="btn btn-secondary dropdown-toggle"]')).click();
    browser.sleep(2000);
    element(by.partialLinkText('Moderation Public')).click();
    browser.sleep(2000);
    expect(browser.getTitle()).toEqual('STARIDAZ : Admin Section');
  });

});