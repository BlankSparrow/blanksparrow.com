var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var nodemon = require('gulp-nodemon');

gulp.task('default', ['watch'], function () {
});

gulp.task('watch', ['browser-sync'], function (){
  gulp.watch('public/scss/**/*.scss', ['sass']); 
  // Other watchers
})

gulp.task('sass', function() {
  return gulp.src('public/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:8080",
        files: ["views/**/*.*"],
        browser: "chrome",
        port: 3000,
	});
});

gulp.task('nodemon', function (cb) {
	
	var started = false;
	
	return nodemon({
		script: 'app.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true; 
		} 
	});
});