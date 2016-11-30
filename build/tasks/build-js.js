const gulp        = require('gulp');
const rename      = require('gulp-rename');
const uglify      = require('gulp-uglify');
const htmlReplace = require('gulp-html-replace');

gulp.task('build-js', () => {

  return gulp.src('src/js/application.js')
    .pipe(uglify())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(htmlReplace({
      'js': 'js/bundle.min.js'
    }))
    .pipe(gulp.dest('../dist/js/'));

});
