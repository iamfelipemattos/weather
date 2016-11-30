const gulp        = require('gulp');
const stylus      = require('gulp-stylus');
const rename      = require('gulp-rename');
const server      = require('browser-sync');
const htmlReplace = require('gulp-html-replace');
const nib         = require('nib');

gulp.task('build-css', () => {

  return gulp.src('src/css/style.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(htmlReplace({
      css: {
        'css': '../dist/css/styles.min.css'
      }
    }))
    
    .pipe(gulp.dest('../dist/css/'))
    .pipe(server.stream());
});
