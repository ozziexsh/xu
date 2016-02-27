var gulp = require('gulp'),
sourcemaps = require('gulp-sourcemaps'),
rename = require('gulp-rename'),
uglify = require('gulp-uglify');

gulp.task('copy', function() {
  return gulp.src('src/xu.js')
    .pipe(gulp.dest('dist'));
});

gulp.task('uglify', ['copy'], function() {
  return gulp.src('src/xu.js')
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename('xu.min.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('build', ['uglify']);
