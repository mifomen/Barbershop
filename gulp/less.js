var gulp = require('gulp');
var less = require('gulp-less');
var cfg = require('../package.json').config;

var plumber = require('gulp-plumber');
var rename = require("gulp-rename");
var csso = require('gulp-csso');
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer"); 

var browserSync = require('browser-sync').create(); 
var csso = require('gulp-csso'); 
var mqpacker = require("css-mqpacker"); 
var minify = require("gulp-csso"); 
// var del = require("del");


gulp.task('less', function() {
  return gulp.src( cfg.src.less + '/**/style.less')
  .pipe(plumber())
  .pipe(less())
  .pipe(postcss([ 
    autoprefixer({ browsers: [
  'last 10 versions', 
  'ie 11',
  'ie 10',
  'Android >= 4.1', 
  'Safari >= 8',
  'iOS >= 8'
  ] }),     
  mqpacker({ sort: true })
]))
  .pipe(csso())
  .pipe(rename('style.min.css'))
  .pipe(gulp.dest(cfg.build.css))
  .pipe(browserSync.stream());
});

// var gulp = require('gulp');
// var watchLess = require('gulp-watch-less');
// var less = require('gulp-less');
 
// gulp.task('less-watch', function () {
//     return gulp.src('less/event.less')
//         .pipe(watchLess('less/**/*.less'))
//         .pipe(less())
//           .pipe(gulp.dest(cfg.build.css))
// });