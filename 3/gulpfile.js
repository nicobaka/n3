var gulp = require('gulp');
var jsdoc = require('gulp-jsdoc3');
var babel = require('gulp-babel');


gulp.task('babel', function(){//задача для галпа перевода из ES6 в ES5 всех необходимых файлов
    gulp.src('src/modules/extendjq.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist/modules'))
    gulp.src('src/js/main.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dist/js'))
});

gulp.task('jsdoc', function () {//задача для галпа создания jsdoc
    gulp.src(['README.md', 'src/modules/extendjq.js'])
        .pipe(jsdoc())
});
