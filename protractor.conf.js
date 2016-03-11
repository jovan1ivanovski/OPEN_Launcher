var path = require('path');
exports.config = {
    baseUrl: 'http://localhost:3000/',

    seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: [path.normalize("app/tests/e2e/*.js")],

    framework: 'jasmine',
    onPrepare: function() {
        browser.get('http://localhost:3000/');
        global.EC = protractor.ExpectedConditions;
        var SpecReporter = require('jasmine-spec-reporter');
        // add jasmine spec reporter
        jasmine.getEnv().addReporter(new SpecReporter({ displayStacktrace: 'all' }));
    },



    jasmineNodeOpts: {
        showColors: true,
        isVerbose: true,
        realtimeFailure: true,
        includeStackTrace: true,
        defaultTimeoutInterval: 30000,
        print: function() { }
    },

    useAllAngular2AppRoots: true
};