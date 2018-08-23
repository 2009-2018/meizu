// 规范CommonJS 
var gulp = require('gulp');

/*
	拷贝html文件
 */
gulp.task('copy-html', function(){
	return gulp.src("html/*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})

/*
	图片整理
 */
gulp.task('images', function(){
	return gulp.src("*.{jpg,png}")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})

/*
	拷贝js文件

 */
gulp.task('scripts', function(){
	return gulp.src(["*.js", "!gulpfile.js"])
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})

/*
	处理scss文件
	gulp-scss
	gulp-sass-china
 */
var scss = require('gulp-sass-china');
gulp.task('scss', function(){
	return gulp.src('css/*.scss')
	.pipe(scss())
	.pipe(gulp.dest('dist/css'))
	.pipe(connect.reload());
})

/*
	拷贝data数据

 */
gulp.task('data', function(){
	return gulp.src(['*.json', "!package.json", "!package-lock.json"])
	.pipe(gulp.dest('dist/data'))
	// .pipe(connect.reload());
})

/*
	一次性执行上述五个任务

 */
gulp.task('build', ["copy-html", "images", "scripts", "data", "scss"], function(){
	
})

/*
	gulp监听

 */
gulp.task('watch', function(){
	/*
		两个参数
		第一个参数，我们监测的文件的路径
		第二个参数，数组，监测到变化以后，我要去执行的任务

	 */
	gulp.watch("html/*.html", ["copy-html"]);
	gulp.watch("*.{jpg,png}", ["images"]);
	gulp.watch("css/*.scss", ["scss"]);
	gulp.watch(['*.json', "!package.json", "!package-lock.json"], ["data"]);
	gulp.watch(["*.js", "!gulpfile.js"], ["scripts"]);
})

/*

	启动服务器
 */
var connect = require('gulp-connect');
gulp.task('server', function(){
	connect.server({
		root: 'dist',
		port: 8080,
		livereload: true
	})
})


gulp.task("default", ['watch', 'server']);