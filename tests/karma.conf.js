module.exports = function(config) {
  config.set({
    basePath: '.',
    frameworks: ['mocha', 'chai'],
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
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};