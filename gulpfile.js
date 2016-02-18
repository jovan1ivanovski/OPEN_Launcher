'use strict';

var gulp       = require('gulp'),
    browserify = require('browserify'),
    source     = require('vinyl-source-stream');

//Jquery and Bootstrap Bundle
gulp.task('main-scripts', function() {
    var files = [
         './node_modules/jquery/dist/jquery.min.js',
         './app/js/jqueryelectron.js',
         './node_modules/bootstrap/dist/js/bootstrap.min.js'
     ];
    return browserify({ entries: files })
        .bundle()
        .pipe(source('scripts.js'))
        .pipe(gulp.dest('build'));
});

