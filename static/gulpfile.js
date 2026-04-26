var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var pkg = require('./package.json');

// Set the banner content
var banner = ['/*!\n',
  ' * Start Bootstrap - <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
  ' * Copyright 2013-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
  ' * Licensed under <%= pkg.license %> (https://github.com/BlackrockDigital/<%= pkg.name %>/blob/master/LICENSE)\n',
  ' */\n',
  ''
].join('');

// Compiles SCSS files from /scss into /css with custom properties enabled
function sassTask() {
  return gulp.src('scss/freelancer.scss')
    .pipe(sass({
      outputStyle: 'expanded',
      precision: 10,
      includePaths: ['node_modules']
    }).on('error', sass.logError))
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }));
}

// Minify compiled CSS
function minifyCss() {
  return gulp.src('css/freelancer.css')
    .pipe(cleanCSS({
      compatibility: '*'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({
      stream: true
    }));
}

// Minify custom JS
function minifyJs() {
  return gulp.src('js/freelancer.js')
    .pipe(uglify())
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('js'))
    .pipe(browserSync.reload({
      stream: true
    }));
}

// Copy vendor files from /node_modules into /vendor
function copy() {
  gulp.src([
      'node_modules/bootstrap/dist/**/*',
      '!**/npm.js',
      '!**/bootstrap-theme.*',
      '!**/*.map'
    ])
    .pipe(gulp.dest('vendor/bootstrap'))

  gulp.src([
      'node_modules/littlefoot/dist/littlefoot.css',
      'node_modules/littlefoot/dist/littlefoot.js',
    ])
    .pipe(gulp.dest('vendor/littlefoot'))

  return gulp.src(['node_modules/@popperjs/core/dist/umd/popper.js', 'node_modules/@popperjs/core/dist/umd/popper.min.js',
      'node_modules/@popperjs/core/dist/umd/popper.min.js.map'])
    .pipe(gulp.dest('vendor/popper'))
}

// Configure the browserSync task
function browserSyncTask(done) {
  browserSync.init({
    server: {
      baseDir: ''
    },
  });
  done();
}

// Watch files for changes
function watch() {
  gulp.watch('scss/*.scss', gulp.series(sassTask, minifyCss));
  gulp.watch('js/*.js', minifyJs);
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('*.html').on('change', browserSync.reload);
  gulp.watch('js/**/*.js').on('change', browserSync.reload);
}

// Define complex tasks
var build = gulp.series(sassTask, minifyCss, minifyJs, copy);
var dev = gulp.parallel(browserSyncTask, watch);

// Export tasks
exports.sass = sassTask;
exports.minifyCss = minifyCss;
exports.minifyJs = minifyJs;
exports.copy = copy;
exports.watch = watch;
exports.default = build;
exports.dev = dev;
