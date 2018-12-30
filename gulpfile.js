const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const sass = require('gulp-sass');

/*
gulp.task('test',function(){
	console.log("hello world!")
})

gulp.task('js',function(){
	gulp.src('./src/js/*.js').pipe(concat('index.min.js')).pipe(uglify()).pipe(gulp.dest('./dist'));
})
gulp.task('css',function(){
	gulp.src('./src/aa.css').pipe(cssnano()).pipe(rename('index1.css')).pipe(gulp.dest('./dist'));
})
*/