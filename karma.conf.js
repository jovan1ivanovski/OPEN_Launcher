// Karma configuration
// Generated on Fri Mar 04 2016 08:29:40 GMT+0100 (Central European Standard Time)

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',

        frameworks: ['browserify','jasmine'],

        files: [
            'node_modules/traceur/bin/traceur-runtime.js',
            'node_modules/es6-module-loader/dist/es6-module-loader.js',
            'node_modules/systemjs/dist/system.js',
            'node_modules/angular2/bundles/angular2.dev.js',
            'tests/common/jasmine-karma-global-variables.js',
            'tests/**/*spec.js'
        ],
            
        exclude: [
        ],

        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'tests/**/*.js': ['browserify'],
            'tests/**/*spec.js': ['coverage']
        },
        
        //Reports
        reporters: ['progress','coverage', 'html'],
 
        // configure the html reporter 
        htmlReporter: {
            outputDir: 'tests/unit_test_reports', // where to put the reports  
            templatePath: null, // set if you moved jasmine_template.html 
            focusOnFailures: true, // reports show failures on start 
            namedFiles: false, // name files instead of creating sub-directories 
            pageTitle: null, // page title for reports; browser info by default 
            urlFriendlyName: false, // simply replaces spaces with _ for files/dirs 
            reportName: 'html', // report summary filename; browser info by default 
        },
        
        //configure the coverage reporter 
        coverageReporter: {
            dir : 'tests/unit_test_reports/coverage/'
        },
    
        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,

        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],

        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,
        
        plugins: [
            "karma-phantomjs-launcher",
            'karma-browserify',
            "karma-jasmine",
            "karma-coverage",
            "karma-html-reporter"
          ],
    })
}
