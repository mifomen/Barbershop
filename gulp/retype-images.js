var gulp = require('gulp');
var del = require("del");
var run = require("run-sequence");
var imagemin = require("gulp-imagemin");
var svgstore = require("gulp-svgstore");
var svgmin = require("gulp-svgmin");
var rename = require("gulp-rename");

gulp.task('clear-img', function() {
 return del(['build/img/**'])
  });

gulp.task("copy-img", function() {
  return gulp.src([
    "src/img/**",
  ], {
    base: "src/"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("images", function() {

  return gulp.src("build/img/**/*.{png,jpg,gif}")
    .pipe(imagemin([      
      imagemin.optipng({optimizationLevel: 3}), 
      imagemin.jpegtran({progressive: true}),  
      ]))

    .pipe(gulp.dest("build/img"));
});

gulp.task("symbols", function() {//несколько свг в один + сжимаем
  return gulp.src("build/img/**/*.svg")
  .pipe(svgmin())
  .pipe(svgstore({
    inlineSvg: true
  }))
  .pipe(rename("symbols.svg"))
  .pipe(gulp.dest("build/img"));
})

gulp.task("retype-images", function(evt) {
  run(
    "clear-img",


    "copy-img",
    "images",
    "symbols",
    evt
  );
});

