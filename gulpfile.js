'use strict';

var gulp      = require('gulp');
var scss      = require('gulp-sass');
var cssMin    = require('gulp-minify-css');


gulp.task('sassy', function(){
  return gulp.src('./scss/**/*.scss')
    .pipe(scss())
    .pipe(gulp.dest('./public/css'));
});

gulp.task('minify', ['sassy'] , function(){
  return gulp.src('./public/css/main.css')
    .pipe(cssMin())
    .pipe(gulp.dest('./public/css'));
});


gulp.task('build', ['minify']);

gulp.task('default', ['build']);
