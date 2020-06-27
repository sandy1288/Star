var object = require('./objects');

var HTMLReport = require('protractor-html-reporter-2');
var jasmineReporters = require('jasmine-reporters');
//var SpecReporter = require('jasmine-spec-reporter').SpecReporter;


exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  framework: 'jasmine2',
  // multiCapabilities: [
  //   { browserName: 'firefox' },
  //   { browserName: 'chrome' }
  // ],
  capabilities: {
    'directConnect': true,
    'browserName': 'chrome'
  },

  specs: [
    'Testcases/login/*.js',
    'Testcases/Home/*.js',
    // 'Testcases/AddTheme/*.js',
    // 'Testcases/AddDiseaseRoadmap/*.js',
    // 'Testcases/AddCountrydocument/*.js',
    // 'Testcases/AddAnimaldocumets/*.js',
    // 'Testcases/AddPathogen/*.js',
    // 'Testcases/Project/*.js',
    // 'Testcases/Organisation/*.js',
    // 'Testcases/Addtag/*.js',
    // 'Testcases/More/*.js',
    'Testcases/Addtag/*.js',
    // 'Testcases/updated_user/*.js',
    // 'Testcases/Admin_Section/*.js'

  ],

  onPrepare: function () {
    browser.manage().window().maximize();
    var jasmineReporters = require('jasmine-reporters');

    //protractor html reporter-2

    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: './',
      filePrefix: 'xmlresults'
    }));
    /*var AllureReporter = require('jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));

    jasmine.getEnv().afterEach(function (done) {
      browser.takeScreenshot().then(function (png) {
        allure.createAttachment('Screenshot', function () {
          return new Buffer(png, 'base64')
        }, 'image/png')();
        done();
      })
    }); */
  },
  plugins: [{
    package: 'jasmine2-protractor-utils',
    disableHTMLReport: true,
    disableScreenshot: false,
    screenshotPath: './screenshots',
    screenshotOnExpectFailure: false,
    screenshotOnSpecFailure: true,
    clearFoldersBeforeTest: true
  }],

  onComplete: function () {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
      browserName = caps.get('browserName');
      browserVersion = caps.get('version');
      platform = caps.get('platform');

      var HTMLReport = require('protractor-html-reporter-2');

      testConfig = {
        reportTitle: 'Star-Idaz report',
        outputPath: './',
        outputFilename: 'ProtractorTestReport',
        screenshotPath: './screenshots',
        testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: true,
        testPlatform: platform
      };
      new HTMLReport().from('xmlresults.xml', testConfig);
    });
  },
  // increased time out for debugging
  allScriptsTimeout: 999999,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 999999,
    showColors: true
  },

  params: object
};