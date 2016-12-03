var gulp = require('gulp'),
    connect = require('gulp-connect'),
    Server = require('karma').Server,
    protractor = require("gulp-protractor").protractor;


gulp.task('connect', function () {
  connect.server({
    root: 'app/',
    port: 8888
  });
});

gulp.task('unit', function (done) {
  var server = new Server({
    configFile: __dirname + '/tests/karma.conf.js',
    singleRun: true
  }, done);
  server.start();
});

gulp.task('e2e', function(done) {
  var args = ['--baseUrl', 'http://127.0.0.1:8888'];
  gulp.src(["./tests/e2e/*.js"])
    .pipe(protractor({
      configFile: "tests/protractor.conf.js",
      args: args
    }))
    .on('error', function(e) { throw e; });
});

gulp.task('default', ['connect']);