var gulp = require('gulp'),
    connect = require('gulp-connect'),
    karma = require('karma').server,
    protractor = require("gulp-protractor").protractor;


gulp.task('connect', function () {
  connect.server({
    root: 'app/',
    port: 8888
  });
});

gulp.task('unit', function (done) {
  karma.start({
    configFile: __dirname + '/tests/karma.conf.js',
    singleRun: true
  }, done);
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