const gulp   = require('gulp');
const server = require('browser-sync').create();

gulp.task('server', () => {
  server.init({
    server: {
        baseDir: "./",
    },
    open: false
  });
  gulp.watch('*.html').on("change", server.reload);
});
