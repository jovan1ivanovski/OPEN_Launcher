'use strict';

var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    minifyCss = require('gulp-minify-css'),
    concatCss = require('gulp-concat-css');

//Scripts Bundle
gulp.task('main-scripts', function () {
    var files = [
        './node_modules/jquery/dist/jquery.min.js',
        './app/assets/js/jqueryelectron.js',
        './node_modules/bootstrap/dist/js/bootstrap.min.js',
        './node_modules/angular2/bundles/angular2-polyfills.min.js'
    ];
    return browserify({ entries: files })
        .bundle()
        .pipe(source('main-scripts.js'))
        .pipe(gulp.dest('build'));
});

//CSS Bundle
gulp.task('main-css', function () {
    var files = ['./node_modules/bootstrap/dist/css/bootstrap.min.css', './app/assets/css/site.css'];
    return gulp.src(files)
    .pipe(concatCss('main-css.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('build/'));
});

