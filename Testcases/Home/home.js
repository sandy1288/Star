let homepage = require('../AllObject/homepage');
describe('Star-Idaz home page', function () {

  var EC = protractor.ExpectedConditions;
  var randNumber = browser.params.user.random;

  it('verify that compress button appear on top right of the page', function () {
    expect(element(by.className('fa fa-compress')).isPresent()).toBe(true);
    browser.sleep(3000);
    // element(by.xpath('//i[@class="fa fa-bars"]')).click();
  });

  it('verify that add, edit, Help and user profile button should appear on application compress button', function () {
    expect(element(by.xpath('//span[contains(text(),"Add")]')).isPresent()).toBe(true);
    expect(element(by.xpath('//a[@class="btn btn-secondary btn-edit"]')).isPresent()).toBe(true);
    expect(element(by.xpath('//i[@class="fa fa-question"]')).isPresent()).toBe(true);
    expect(element(by.className('profile')).isPresent()).toBe(true);

  });

  it('Click on add button and verify that all the section appear in the list', function () {
    browser.sleep(2000);
    element(by.xpath('//span[contains(text(),"Add")]')).click();
    expect(element(by.linkText('Admin Section')).isPresent()).toBeTruthy();
    expect(element(by.linkText('Animal Section')).isPresent()).toBeTruthy();
    expect(element(by.linkText('Bio Containment Level Section')).isPresent()).toBeTruthy();
    expect(element(by.linkText('Bio Safety Level Section')).isPresent()).toBeTruthy();
    expect(element(by.linkText('Country Section')).isPresent()).toBeTruthy();
    expect(element(by.linkText('Disease')).isPresent()).toBeTruthy();
    expect(element(by.linkText('Disease Section')).isPresent()).toBeTruthy();
    expect(element(by.linkText('Map')).isPresent()).toBeTruthy();
    expect(element(by.linkText('Organisation Section')).isPresent()).toBeTruthy();
    expect(element(by.linkText('Pathogen Section')).isPresent()).toBeTruthy();
    expect(element(by.linkText('Project Section')).isPresent()).toBeTruthy();
    expect(element(by.linkText('Research Capability Section')).isPresent()).toBeTruthy();
    expect(element(by.linkText('Roadmap')).isPresent()).toBeTruthy();
    expect(element(by.linkText('Roadmap Section')).isPresent()).toBeTruthy();
    expect(element(by.linkText('Tag')).isPresent()).toBeTruthy();
    expect(element(by.linkText('Theme Section')).isPresent()).toBeTruthy();
    expect(element(by.linkText('User Section')).isPresent()).toBeTruthy();

  });

  it('Add admin document', function () {
    browser.sleep(2000);
    element(by.linkText('Admin Section')).click();
    expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');

  });

  it('fill all mendatory data in the given field to create admin section', function () {
    homepage.createdocument.clear().sendKeys("admin" + randNumber);
    element(by.xpath('//div[@class="ql-editor ql-blank"]//p')).clear().sendKeys('desc' + randNumber);
    // element(by.xpath('//input[@placeholder="Enter shortTitle"]')).clear().sendKeys('shortTitle' + randNumber);
    browser.sleep(2000);
    element(by.xpath('//a[@class="btn btn-save"]')).click();
    browser.sleep(1000);
    expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');
  });

  it('Add animal document', function () {
    browser.sleep(3000);
    element(by.xpath('//span[contains(text(),"Add")]')).click();
    element(by.linkText('Animal Section')).click();
    expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');

  });

  it('fill all mendatory data in the given field to create animal section', function () {
    element(by.xpath('//input[@placeholder="Enter title"]')).clear().sendKeys("animal" + randNumber);
    element(by.xpath('//div[@class="ql-editor ql-blank"]//p')).clear().sendKeys('desc' + randNumber);
    // element(by.xpath('//input[@placeholder="Enter shortTitle"]')).clear().sendKeys('shortTitle' + randNumber);
    browser.sleep(2000);
    element(by.xpath('//a[@class="btn btn-save"]')).click();
    browser.sleep(1000);
    expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');
  });

  it('Add Bio Containment Level Section document', function () {
    browser.sleep(3000);
    element(by.xpath('//span[contains(text(),"Add")]')).click();
    element(by.linkText('Bio Containment Level Section')).click();
    expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');

  });

  it('fill all mendatory data in the given field to create animal section', function () {
    element(by.xpath('//input[@placeholder="Enter title"]')).clear().sendKeys("BCL" + randNumber);
    element(by.xpath('//div[@class="ql-editor ql-blank"]//p')).clear().sendKeys('BCLdesc' + randNumber);
    browser.sleep(2000);
    element(by.xpath('//a[@class="btn btn-save"]')).click();
    browser.sleep(1000);
    expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');
  });

  it('Add Bio Safety Level Section document', function () {
    browser.sleep(3000);
    element(by.xpath('//span[contains(text(),"Add")]')).click();
    element(by.linkText('Bio Safety Level Section')).click();
    expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');

  });

  it('fill all mendatory data in the given field to create animal section', function () {
    element(by.xpath('//input[@placeholder="Enter title"]')).clear().sendKeys("BSL" + randNumber);
    element(by.xpath('//div[@class="ql-editor ql-blank"]//p')).clear().sendKeys('BSLdesc' + randNumber);
    browser.sleep(2000);
    element(by.xpath('//a[@class="btn btn-save"]')).click();
    browser.sleep(1000);
    expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');
  });

  it('Add Country Section document', function () {
    browser.sleep(3000);
    element(by.xpath('//span[contains(text(),"Add")]')).click();
    browser.sleep(1000);
    element(by.linkText('Country Section')).click();
    expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');

  });

  it('fill all mendatory data in the given field to create Country Section section', function () {
    element(by.xpath('//input[@placeholder="Enter title"]')).clear().sendKeys("animal" + randNumber);
    element(by.xpath('//div[@class="ql-editor ql-blank"]//p')).clear().sendKeys('desc' + randNumber);
    // element(by.xpath('//input[@placeholder="Enter shortTitle"]')).clear().sendKeys('shortTitle' + randNumber);
    browser.sleep(2000);
    element(by.xpath('//a[@class="btn btn-save"]')).click();
    browser.sleep(1000);
    expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');
  });*/

  it('Add Disease document', function () {
    // browser.sleep(3000);
    // element(by.xpath('//span[contains(text(),"Add")]')).click();
    element(by.linkText('Disease')).click();
    expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');

  });

  it('fill all mendatory data in the given field to create Disease section', function () {
    element(by.xpath('//input[@placeholder="Enter title"]')).clear().sendKeys("Disease" + randNumber);
    element(by.xpath('//div[@class="ql-editor ql-blank"]//p')).clear().sendKeys('desc' + randNumber);
    // element(by.xpath('//input[@placeholder="Enter shortTitle"]')).clear().sendKeys('shortTitleDisease' + randNumber);
    browser.sleep(2000);
    element(by.xpath('//a[@class="btn btn-save"]')).click();
    browser.sleep(1000);
    expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');
  });

  it('Add Disease Section document', function () {
    browser.sleep(3000);
    element(by.xpath('//span[contains(text(),"Add")]')).click();
    element(by.linkText('Disease Section')).click();
    expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');

  });

  it('fill all mendatory data in the given field to create Disease Section section', function () {
    element(by.xpath('//input[@placeholder="Enter title"]')).clear().sendKeys("Disease Section" + randNumber);
    browser.sleep(2000);
    element(by.xpath('//a[@class="btn btn-save"]')).click();
    browser.sleep(1000);
    expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');
  });

  /* it('Add Map document', function () {
     browser.sleep(3000);
     element(by.xpath('//span[contains(text(),"Add")]')).click();
     element(by.linkText('Map')).click();
     expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');

   });

   it('fill all mendatory data in the given field to create Map section', function () {
     element(by.xpath('//input[@placeholder="Enter title"]')).clear().sendKeys("Map" + randNumber);
     element(by.xpath('//div[@class="ql-editor ql-blank"]//p')).clear().sendKeys('desc' + randNumber);
     // element(by.xpath('//input[@placeholder="Enter shortTitle"]')).clear().sendKeys('Map' + randNumber);
     browser.sleep(2000);
     element(by.xpath('//a[@class="btn btn-save"]')).click();
     browser.sleep(1000);
     expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');
   });

   it('Add Organisation Section document', function () {
     browser.sleep(3000);
     element(by.xpath('//span[contains(text(),"Add")]')).click();
     element(by.linkText('Organisation Section')).click();
     expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');

   });

   it('fill all mendatory data in the given field to create Organisation Section', function () {
     element(by.xpath('//input[@placeholder="Enter title"]')).clear().sendKeys("Organisation Section" + randNumber);
     element(by.xpath('//div[@class="ql-editor ql-blank"]//p')).clear().sendKeys('desc' + randNumber);
     // element(by.xpath('//input[@placeholder="Enter shortTitle"]')).clear().sendKeys('Organisation Section' + randNumber);
     browser.sleep(2000);
     element(by.xpath('//a[@class="btn btn-save"]')).click();
     browser.sleep(1000);
     expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');
   });

   it('Add Pathogen Section document', function () {
     browser.sleep(3000);
     element(by.xpath('//span[contains(text(),"Add")]')).click();
     element(by.linkText('Pathogen Section')).click();
     expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');

   });

   it('fill all mendatory data in the given field to create Pathogen Section', function () {
     element(by.xpath('//input[@placeholder="Enter title"]')).clear().sendKeys("Pathogen Section" + randNumber);
     element(by.xpath('//div[@class="ql-editor ql-blank"]//p')).clear().sendKeys('desc' + randNumber);
     // element(by.xpath('//input[@placeholder="Enter shortTitle"]')).clear().sendKeys('Pathogen Section' + randNumber);
     browser.sleep(2000);
     element(by.xpath('//a[@class="btn btn-save"]')).click();
     browser.sleep(1000);
     expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');
   });

   it('Add Project Section document', function () {
     browser.sleep(3000);
     element(by.xpath('//span[contains(text(),"Add")]')).click();
     element(by.linkText('Project Section')).click();
     expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');

   });

   it('fill all mendatory data in the given field to create Project Section', function () {
     element(by.xpath('//input[@placeholder="Enter title"]')).clear().sendKeys("Project Section" + randNumber);
     element(by.xpath('//div[@class="ql-editor ql-blank"]//p')).clear().sendKeys('desc' + randNumber);
     // element(by.xpath('//input[@placeholder="Enter shortTitle"]')).clear().sendKeys('Project Section' + randNumber);
     browser.sleep(2000);
     element(by.xpath('//a[@class="btn btn-save"]')).click();
     browser.sleep(1000);
     expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');
   });

   it('Add Research Capability Section document', function () {
     browser.sleep(3000);
     element(by.xpath('//span[contains(text(),"Add")]')).click();
     element(by.linkText('Research Capability Section')).click();
     expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');

   });

   it('fill all mendatory data in the given field to create Research Capability Section', function () {
     element(by.xpath('//input[@placeholder="Enter title"]')).clear().sendKeys("Research Capability Section" + randNumber);
     element(by.xpath('//div[@class="ql-editor ql-blank"]//p')).clear().sendKeys('desc' + randNumber);
     // element(by.xpath('//input[@placeholder="Enter shortTitle"]')).clear().sendKeys('Research Capability Section' + randNumber);
     browser.sleep(2000);
     element(by.xpath('//a[@class="btn btn-save"]')).click();
     browser.sleep(1000);
     expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');
   });


   it('Add Roadmap Section document', function () {
     browser.sleep(3000);
     element(by.xpath('//span[contains(text(),"Add")]')).click();
     browser.sleep(2000);
     element(by.linkText('Roadmap')).click();
     expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');

   });

   it('fill all mendatory data in the given field to create Roadmap Section', function () {
     element(by.xpath('//input[@placeholder="Enter title"]')).clear().sendKeys("Roadmap" + randNumber);
     element(by.xpath('//div[@class="ql-editor ql-blank"]//p')).clear().sendKeys('desc' + randNumber);
     // element(by.xpath('//input[@placeholder="Enter shortTitle"]')).clear().sendKeys('Roadmap' + randNumber);
     browser.sleep(2000);
     element(by.xpath('//a[@class="btn btn-save"]')).click();
     browser.sleep(1000);
     expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');
   });

   it('Add Roadmap Section Section document', function () {
     browser.sleep(3000);
     element(by.xpath('//span[contains(text(),"Add")]')).click();
     element(by.linkText('Roadmap Section')).click();
     expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');

   });

   it('fill all mendatory data in the given field to create Roadmap Section Section', function () {
     element(by.xpath('//input[@placeholder="Enter title"]')).clear().sendKeys("Roadmap Section" + randNumber);
     element(by.xpath('//div[@class="ql-editor ql-blank"]//p')).clear().sendKeys('desc' + randNumber);
     // element(by.xpath('//input[@placeholder="Enter shortTitle"]')).clear().sendKeys('Roadmap Section' + randNumber);
     browser.sleep(2000);
     element(by.xpath('//a[@class="btn btn-save"]')).click();
     browser.sleep(1000);
     expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');
   });

   it('Add Tag Section document', function () {
     browser.sleep(3000);
     element(by.xpath('//span[contains(text(),"Add")]')).click();
     element(by.linkText('Tag')).click();
     expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');

   });

   it('fill all mendatory data in the given field to create Tag Section', function () {
     element(by.xpath('//input[@placeholder="Enter title"]')).clear().sendKeys("Tag" + randNumber);
     element(by.xpath('//div[@class="ql-editor ql-blank"]//p')).clear().sendKeys('desc' + randNumber);
     // element(by.xpath('//input[@placeholder="Enter shortTitle"]')).clear().sendKeys('Tag' + randNumber);
     browser.sleep(2000);
     element(by.xpath('//a[@class="btn btn-save"]')).click();
     browser.sleep(1000);
     expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');
   });

   it('Add Theme Section document', function () {
     browser.sleep(3000);
     element(by.xpath('//span[contains(text(),"Add")]')).click();
     element(by.linkText('Theme Section')).click();
     expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');

   });

   it('fill all mendatory data in the given field to create Theme Section Section', function () {
     element(by.xpath('//input[@placeholder="Enter title"]')).clear().sendKeys("Theme Section" + randNumber);
     element(by.xpath('//div[@class="ql-editor ql-blank"]//p')).clear().sendKeys('desc' + randNumber);
     // element(by.xpath('//input[@placeholder="Enter shortTitle"]')).clear().sendKeys('Theme Section' + randNumber);
     browser.sleep(2000);
     element(by.xpath('//a[@class="btn btn-save"]')).click();
     browser.sleep(1000);
     expect(browser.getTitle()).toEqual('STARIDAZ : IRC Research Roadmaps test');
   }); */


});