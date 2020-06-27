describe('Update user profile page', function () {

  var EC = protractor.ExpectedConditions;
  var randNumber = browser.params.user.random;

  it('Verify that More drop down should appear on clicking menu button', function () {
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
      element(by.partialLinkText('Profile')).click();
      browser.sleep(2000);
      element(by.xpath('//a[@class="btn btn-secondary btn-edit"]')).click();
      browser.sleep(2000);
      expect(browser.getTitle()).toEqual('STARIDAZ : Jaideep Das');
      element(by.xpath('//a[contains(text(),"Save")]')).click();
      browser.sleep(2000);
      expect(browser.getTitle()).toEqual('STARIDAZ : Jaideep Das');
    })
  });

});