const gulp        = require('gulp');
const htmlReplace = require('gulp-html-replace');

require('./src/tasks/build-js');
require('./src/tasks/build-css');
require('./src/tasks/clean');
require('./src/tasks/watch');
// require('./src/tasks/copy');
require('./src/tasks/server');

gulp.task('build', ['clean', 'build-js','build-css', 'server',]);
