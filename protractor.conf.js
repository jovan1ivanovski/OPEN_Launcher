require('ts-node/register');

exports.config = {
  baseUrl: 'http://localhost:3000/',

  //seleniumAddress: 'http://localhost:4444/wd/hub',

  // use `npm run e2e`
  specs: [
    'src/app/tests/e2e/*.js'
  ],

  exclude: [],

  framework: 'jasmine2',

  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: true,
    realtimeFailure: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 30000
  },
  directConnect: true,

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true']
    }
  },

  onPrepare: function() {
    global.EC = protractor.ExpectedConditions;

    browser.get('http://localhost:3000/');
    browser.ignoreSynchronization = true;

    var SpecReporter = require('jasmine-spec-reporter');
    jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: 'all' }));
  },

  seleniumServerJar: "node_modules/protractor/selenium/selenium-server-standalone-2.48.2.jar",

  useAllAngular2AppRoots: true
};
