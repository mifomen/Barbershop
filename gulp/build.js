var gulp = require('gulp');
var cfg = require('../package.json').config;
var run = require("run-sequence");
// var less = require('gulp-less');

gulp.task("build", function(evt) {
  run(
    "full-clean",
    // "copy",
    "retype-images",
    "retype-fonts",
    "html",
    "less",
    "retype-js",
    // "images",
    // "symbols",
    evt
  );
});