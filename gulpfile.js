const gulp = require('gulp');
const uglify = require('gulp-uglify');
const cssnano = require('gulp-cssnano');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const babel = require('gulp-babel');

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


gulp.task('sass',function(){
	gulp.src('./src/sass/*.scss')
	.pipe(sass())
	.pipe(rename({'suffix' : 'min'}))
	.pipe(gulp.dest('./dist/css'));
})
gulp.task('default',function(){
	gulp.watch('./src/sass/*.scss',['sass']);
})

gulp.task('js',function(){
	gulp.src('./src/js/*.js')
	.pipe(uglify())
	.pipe(rename({'suffix' : 'min'}))
	.pipe(gulp.dest('./dist/js'));
})

