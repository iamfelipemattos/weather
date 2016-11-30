const gulp = require('gulp');

gulp.task('copy', () => {
  return gulp.src('index.html')
    .pipe(gulp.dest('../dist/'));

});
