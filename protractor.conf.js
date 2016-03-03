var path = require('path');
exports.config = {
    baseUrl: 'http://localhost:3000/',
    
    seleniumAddress: 'http://localhost:4444/wd/hub',
    
    specs: [path.normalize("app/tests/e2e/example.js")],

    framework: 'jasmine',

    useAllAngular2AppRoots: true
};