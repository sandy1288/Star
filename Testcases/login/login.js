describe('login to the Star-Idaz', function () {

  var EC = protractor.ExpectedConditions;
  beforeEach(function () {
    browser.ignoreSynchronization = true;
    browser.get(browser.params.url + '/login');
  });

  it('verify that login frame appear on the page', function () {
    element(by.buttonText('Advanced')).click();
    browser.sleep(1000);
    element(by.linkText('Proceed to staridaz-dev.ap-south-1.elasticbeanstalk.com (unsafe)')).click();
    browser.sleep(2000);
    expect(browser.getTitle()).toEqual('STAR-IDAZ - Login');
  });

  xit('try to login in with blank credentials', function () {
    element(by.id('username')).clear().sendKeys('');
    element(by.id('password')).clear().sendKeys('');
    element(by.buttonText('Sign In')).click();
    browser.wait(EC.invisibilityOf($('.pg-loading-center-middle')), 10000);
    expect(browser.getTitle()).toEqual('STAR-IDAZ - Login');
  });

  xit('Verify that user is not able to login with invalid credentials', function () {
    expect(browser.getTitle()).toEqual('STAR-IDAZ - Login');
    element(by.id('username')).sendKeys('test');
    element(by.id('password')).sendKeys('test');
    element(by.buttonText('Sign In')).click();
    browser.wait(EC.invisibilityOf($('.pg-loading-center-middle')), 10000);
    expect(browser.getTitle()).toEqual('STAR-IDAZ - Login');
  });

  it('verify that user should able to login with valid credentials', function () {
    expect(browser.getTitle()).toEqual('STAR-IDAZ - Login');
    element(by.id('username')).sendKeys(browser.params.user.username);
    element(by.id('password')).sendKeys(browser.params.user.password);
    element(by.buttonText('Sign In')).click();
    browser.wait(EC.invisibilityOf($('.pg-loading-center-middle')), 10000);
    expect(browser.getTitle()).toEqual('STAR-IDAZ - Login');
  });

});