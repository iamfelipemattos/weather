const gulp = require('gulp');

// require('./dev/tasks/build-img');
require('./dev/tasks/clean');
require('./dev/tasks/copy');
require('./dev/tasks/copy-image');
// require('./dev/tasks/usemin');
require('./dev/tasks/build-css');
require('./dev/tasks/server');
require('./dev/tasks/watch.js');

gulp.task('default', ['copy'], () => {
  gulp.start(['build-css', 'watch','copy-image' ]);
});

