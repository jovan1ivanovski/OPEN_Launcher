var path = require('path');
exports.config = {
    baseUrl: 'http://localhost:3000/',
    
    seleniumAddress: 'http://localhost:4444/wd/hub',
    
    specs: [path.normalize("app/tests/e2e/*.js")],

    framework: 'jasmine',
     onPrepare: function() {
    browser.get('http://localhost:3000/');
     global.EC = protractor.ExpectedConditions;
    },

    useAllAngular2AppRoots: true
};