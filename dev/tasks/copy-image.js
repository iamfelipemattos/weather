const gulp = require('gulp');

gulp.task('copy-image', ['copy'], () => {
  
  return gulp.src('dev/images/**/*')
    .pipe(gulp.dest('dist/img'));
});
