var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webserver = require('gulp-webserver');

gulp.task('js', function() {
  gulp.src('builds/trexx/_js/**/*');
});

gulp.task('html', function() {
  gulp.src('builds/trexx/*.html');
});

gulp.task('css', function() {
  gulp.src('builds/trexx/_css/*.css');
});

gulp.task('watch', function() {
  gulp.watch('builds/trexx/_js/**/*', ['js']);
  gulp.watch('builds/trexx/_css/*.css', ['css']);
  gulp.watch(['builds/trexx/*.html',
    'builds/trexx/_views/*.html'], ['html']);
});

gulp.task('webserver', function() {
  gulp.src('builds/trexx/')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'html', 'js', 'css', 'webserver']);
