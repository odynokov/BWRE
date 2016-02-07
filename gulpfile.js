var gulp = require('gulp');
var jade = require('gulp-jade');
var data = require('gulp-data');
var uglifyjs = require('gulp-uglifyjs');
var uglifycss = require('gulp-uglifycss');
var yamljs = require('yamljs');


gulp.task('jade', () => {

  var file = yamljs.load('./src/dictionary.yml');

  var dictionary = Object.keys(file).map(key => {
    return {term: key, def: file[key]};
  });

  gulp
    .src('./src/index.jade')
    .pipe(data((file) => ({dictionary})))
    .pipe(jade())
    .pipe(gulp.dest('./build/'))
});

gulp.task('css', () => {
  gulp
    .src('./src/styles.css')
    .pipe(uglifycss())
    .pipe(gulp.dest('./build/'))
});

gulp.task('js', () => {
  gulp
    .src('./src/scripts.js')
    .pipe(uglifyjs())
    .pipe(gulp.dest('./build/'))
});

gulp.task('default', ['jade', 'css', 'js']);