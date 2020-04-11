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
    'resources',
  ])
})

gulp.task('clean', function () {
  return del([
    'resources',
  ])
})

gulp.task('hugo', function (fetch) {
  return exec('hugo', function (err, stdout, stderr) {
    console.log(stdout)
    console.log(stderr)
    fetch(err)
  })
})

gulp.task('html', function () {
  return gulp.src(['public/**/*.html', 'public/**/*.xml'])
    .pipe(beautify({indent_char: ' ', indent_size: 2}))
    .pipe(replace(/^\s*\r?\n/gm, ''))
    .pipe(gulp.dest('public'))
})

gulp.task('default', gulp.series('reset', 'hugo', 'html'))

gulp.task('build', gulp.series('reset', 'hugo'))

gulp.task('localrun', gulp.series('reset', 'hugo', 'html', 'clean'))
