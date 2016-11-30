gulp.task('copy', function () {
  return gulp.src('index.html')
    .pipe(gulp.dest('dist/'));
});
