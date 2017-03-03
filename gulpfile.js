var gulp = require('gulp'), 
	watch = require('gulp-watch'),
	git = require('gulp-git');

gulp.task('add', function () {
	/* we need to tap only the add and change events. file should not be removed directly */
	watch('_posts/*.md', {events:['add','change']}, function (vinyl) {
		//get the file name 
		file = vinyl.path;
		//now run the git command to add the file
		console.log('Checking in file ' + file);
		return gulp.src(file).pipe(git.add());
	});
});

gulp.task('commit', function () {
	git.commit('writing / updating an article');
	git.push('origin', 'master', {args: '-f'}, function(err) {
		if (err) throw err;
	});
});