const gulp 			= require('gulp');
const cssnano       = require('gulp-cssnano');
const sass = require('gulp-sass');
const less = require('gulp-less');
const nodemon 		= require('gulp-nodemon');
const ts 			= require('gulp-typescript');
const uglify 		= require('gulp-uglify');
const webp 			= require('gulp-webp');
const imagemin = require('gulp-imagemin');
const minifyejs = require('gulp-minify-ejs');
const htmlclean = require('gulp-htmlclean');
//const responsive 		= require('gulp-responsive');
const browserSync 	= require('browser-sync');


gulp.task('default', ['watch'], function () {
});

gulp.task('watch', ['sass', 'typescript', 'images', 'fonts', 'svg', 'minify-ejs', 'less', 'browser-sync', 'nodemon'], function (){
  gulp.watch('styles/scss/**/*.scss', ['sass']); 
	gulp.watch('scripts/ts/**/*.ts', ['typescript']);
	gulp.watch('assets/images/*', ['images']); 
	gulp.watch('assets/svg/*', ['svg']); 
    gulp.watch('assets/fonts/*', ['fonts']); 
    gulp.watch(['views/**/*.ejs', '!views/min/**.ejs'], ['minify-ejs']); 
    gulp.watch('styles/less/**/*.less', ['less']); 
  // Other watchers
})

gulp.task('less', function () {
    return gulp.src(['styles/less/bootstrap.less'])
        .pipe(less())
        .pipe(cssnano({ autoprefixer: { add: true } }))
        .pipe(gulp.dest('public/css'));
});

gulp.task('minify-ejs', function () {
    return gulp.src(['views/**/*.ejs'])
        .pipe(minifyejs())
        .pipe(htmlclean())
        //.pipe(rename({suffix:".min"})) 
        .pipe(gulp.dest('views/min'))
})

gulp.task('images', function() {
    gulp.src('assets/images/*')
        .pipe(imagemin())
				.pipe(webp())
        .pipe(gulp.dest('public/images'))
});

gulp.task('svg', function() {
    gulp.src('assets/svg/*')
        .pipe(imagemin())
        .pipe(gulp.dest('public/svg'))
});

gulp.task('fonts', function() {
    gulp.src('assets/fonts/*')
        .pipe(gulp.dest('public/fonts'))
});

gulp.task('typescript', function () {
    return gulp.src('scripts/ts/**/*.ts')
      .pipe(ts({
      	noImplicitAny: true,
				out: 'main.js'
      }))
			.pipe(uglify())
      .pipe(gulp.dest('public/js'))
			.pipe(browserSync.reload({
      	stream: true
    }))
});

gulp.task('sass', function() {
  return gulp.src('styles/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass({includePaths: ['./views/scss']}).on('error', sass.logError))
		.pipe(cssnano({ autoprefixer: { add: true} }))
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browser-sync', function () {
    browserSync.init(null, {
        proxy: "http://localhost:1337",
        files: ["views/**/*.*"],
        browser: "chrome",
        port: 3000,
    });
});

gulp.task('nodemon', function (cb) {

    var started = false;

    return nodemon({
        script: 'server.js'
    }).on('start', function () {
        // to avoid nodemon being started multiple times
        // thanks @matthisk
        if (!started) {
            cb();
            started = true;
        }
    });
});