// Karma configuration
// Generated on Thu Jun 30 2016 16:48:22 GMT-0400 (EDT)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'src/js/**/*.js',
      'src/spec/**/*-spec.js'
    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/js/**/*.js': ['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress', 'coverage'],


    // coverate reporter
    coverageReporter: {
      type: 'html',
      dir: 'coverage/',
      subdir: function (browser) {
        return browser.toLowerCase().split(/[ /-]/)[0];
      },
      watermarks: {
        statements: [50, 75],
        functions: [50, 75],
        branches: [50, 75],
        lines: [50, 75]
      }
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // The configuration setting tells Karma how long to wait (in milliseconds) after any changes have
    // occurred before starting the test process again.
    autoWatchBatchDelay: 1000,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    // browsers: ['Chrome', 'ChromeCanary', 'Firefox', 'Safari', 'PhantomJS'],
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,


    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
};