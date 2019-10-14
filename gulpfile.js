'use strict';
var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),//browser-sync 호출
    html = require('gulp-html-tag-include'),
    sass = require('gulp-sass'),//scss 지원
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify');

var paths = {
    port:'3000',
    input:'./src/**/*',
	output:'./docs/',
	build:'./public/',
    html: {
        input: './src/**/*.html',
        output: './docs/'
    },
	img:{
		input:'./src/img/*',
		output:'./docs/img'
	},
	font:{
		input:'./src/font/*',
		output:'./docs/font'
	},
    style:{
        input:'./src/scss/*.scss',
        output:'./docs/css'
    },
    js: {
        input : './src/js/*.js',
        output : './docs/js/'
    }
};

//browser-sync
gulp.task('browserSync', function () {
    console.log("gulp 시작!!");
	gulp.src(paths.font.input)
	.pipe(gulp.dest(paths.font.output));
	gulp.src(paths.img.input)
	.pipe(gulp.dest(paths.img.output));
    return browserSync.init({
        port:paths.port,
        server:{
            baseDir: paths.html.output
        },
        startPath:'./html/index.html'
    })
});

//gulp-html-tag-include
gulp.task('html-include', function() {
    return gulp.src([
        paths.html.input
    ])
	.pipe(html())
	.pipe(gulp.dest(paths.html.output))
	.pipe(browserSync.reload({
		stream:true
	}))
});

//scss
gulp.task('sass', function () {
    gulp.src(paths.style.input)
	.pipe(sourcemaps.init()) //소스맵 초기화 및 생성
	.pipe(sass.sync().on('error', sass.logError))
	.pipe(sass({outputStyle:'expanded'})) //nested, expanded, compact, compressed
	.pipe(sourcemaps.write('.')) //소스맵 작성
	.pipe(gulp.dest(paths.style.output))
	.pipe(browserSync.reload({
		stream:true
	}));
    //압축버전 - 이버전은 소스맵이 안맞아서 배포용으로 따로 뺌
    gulp.src(paths.style.input)
	.pipe(sass.sync().on('error', sass.logError))
	.pipe(autoprefixer({
		browsers: ['last 2 versions','ie 8', 'ie 9']
	}))
	.pipe(sass({outputStyle:'compressed'})) //nested, expanded, compact, compressed
	.pipe(gulp.dest(paths.style.output+'/min'));
});

gulp.task('js',function(){
	gulp.src(paths.js.input)
		.pipe(gulp.dest(paths.js.output))
		.pipe(uglify())
		.pipe(gulp.dest(paths.js.output+'/min'))
		.pipe(browserSync.reload({
			stream:true
		}));
});

gulp.task('watch', ['html-include','sass','js'], function() {
    gulp.watch(paths.style.input, ['sass']);
    gulp.watch(paths.html.input, ['html-include']);
	gulp.watch(paths.js.input, ['js']);
});

gulp.task('default',['browserSync','watch']);