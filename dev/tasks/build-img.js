const gulp     = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('build-img', () => {

  return gulp.src('dist/img/**/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
});
