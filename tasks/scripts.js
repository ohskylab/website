'use strict';

var gulp = require('gulp');

gulp.task('scripts', function() {

  var args = require('yargs').argv;
  var gulpIf = require('gulp-if');
  var uglify = require('gulp-uglify');

  var paths = {
    src: 'src/assets/scripts/*.js',
    dest: 'dist/assets/scripts'
  };

  var isProduction = args.type === 'production';

  return gulp.src(paths.src)
    .pipe(gulpIf(isProduction, uglify()))
    .pipe(gulp.dest(paths.dest));

});