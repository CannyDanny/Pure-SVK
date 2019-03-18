var gulp = require('gulp');
var sass = require('gulp-sass');
var prefixer = require('gulp-autoprefixer');

gulp.task('sass', function() {
  return gulp.src('./scss/style.scss')
    .pipe(sass())
    .pipe(prefixer('last 2 versions'))
    .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
  gulp.watch('./scss/style.scss',['sass']);
})

gulp.task('default', ['sass','watch']);
