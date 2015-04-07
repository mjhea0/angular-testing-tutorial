module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns
    basePath: '.',

    // frameworks to use
    frameworks: ['mocha', 'chai'],

    // list of files / patterns to load in the browser
    files: [
      '../app/bower_components/angular/angular.js',
      '../app/bower_components/jquery/dist/jquery.js',
      '../app/bower_components/angular-strap/dist/angular-strap.js',
      '../app/bower_components/angular-strap/dist/angular-strap.tpl.js',
      '../app/bower_components/angular-mocks/angular-mocks.js',
      '../app/bower_components/angular-route/angular-route.js',
      './unit/*.js',
      '../app/app.js'
    ],

    // test result reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    browsers: ['Chrome'],

    // Continuous Integration mode
    singleRun: false
  });
};