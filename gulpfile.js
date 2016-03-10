'use strict';

var gulp = require('gulp'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    minifyCss = require('gulp-minify-css'),
    concatCss = require('gulp-concat-css'),
    ts = require('gulp-typescript'),
    typescript = require('typescript'),
    sourcemaps = require('gulp-sourcemaps');
 var del = require('del');
 var KarmaServer = require('karma').Server;
 

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

// clean all unit tests and components
gulp.task("clean-test-build", function () {
	return del(['tests/**/**/*.js']);
});

//build all components inside tests folder
gulp.task('component-build', ['clean-test-build'], function () {
	var tsProject = ts.createProject('test.tsconfig.json', {
		typescript: typescript
	});

	return gulp.src(['app/components/**/!(*spec).ts', 'app/shared/**/!(*spec).ts'])
		.pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(gulp.dest('tests/'));
});

//build all unit test files inside tests folder
gulp.task('unit-tests-build', ['component-build'], function () {
	var tsProject = ts.createProject('test.tsconfig.json', {
		typescript: typescript
	});

	return gulp.src(['app/components/**/*spec.ts', 'app/shared/**/*spec.ts'])
		.pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .pipe(gulp.dest('tests/'));
});

//build all components and unit test and start karma 
gulp.task("test-build", ['unit-tests-build'], function (done) {
	new KarmaServer({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	}, done).start();
});

//start karma
gulp.task("test", function (done) {
	new KarmaServer({
		configFile: __dirname + '/karma.conf.js',
		singleRun: true
	}, done).start();
});

