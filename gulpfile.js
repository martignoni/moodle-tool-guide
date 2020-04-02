var gulp = require('gulp')
// var concat = require('gulp-concat')
// var minify = require('gulp-clean-css')
// var uglify = require('gulp-uglify')
var beautify = require('gulp-jsbeautifier')
var replace = require('gulp-replace')
var rename = require('gulp-ext-replace')
// var gulpif = require('gulp-if')
var exec = require('child_process').exec
var del = require('del')

gulp.task('reset', function () {
  return del([
    'public',
  ])
})

gulp.task('hugo', gulp.series('reset', function (fetch) {
  return exec('hugo', function (err, stdout, stderr) {
    console.log(stdout)
    console.log(stderr)
    fetch(err)
  })
}))

gulp.task('html', function () {
  return gulp.src(['public/**/*.html', 'public/**/*.xml'])
    .pipe(beautify({indent_char: ' ', indent_size: 2}))
    .pipe(replace(/^\s*\r?\n/gm, ''))
    .pipe(gulp.dest('public'))
})

gulp.task('default', gulp.series('hugo', 'html'))
