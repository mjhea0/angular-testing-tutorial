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

gulp.task('default', ['connect']);