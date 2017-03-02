var gulp=require('gulp');
var babel=require('gulp-babel');
var es2015=require('babel-preset-es2015');
var webpack=require('gulp-webpack');
var clean=require('gulp-clean');

gulp.task("clean",function(){
	return gulp.src(['lib'],{read:false})
	.pipe(clean());
});


gulp.task('es6Transform',function(){
	return gulp.src('src/*.js')
	.pipe(babel({presets:[es2015]}))
	.pipe(gulp.dest('lib'))
});

//默认命令，在cmd中输入gulp后，执行的就是这个任务(压缩js需要在检查js之后操作)
gulp.task('default',['clean'],function(){
	gulp.start('es6Transform'),
	gulp.start('watch')
});

gulp.task('watch',['clean'],function(){
	gulp.watch('src/*.js',['es6Transform']);
});