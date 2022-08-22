//1. шаг - npm install --global gulp-cli
//2. шаг - npm init 
//3. шаг - npm install --save-dev gulp
//4. шаг - npm install --save-dev sass
//5. шаг - npm install --save-dev gulp-concat //для конкатинации
//6. шаг - npm i --save-dev browser-sync//для обновления html, css and js

//watch для автоматическо слежения за проектом(обновления изменений)
//parallel чтобы ф-ции могли работать параллельно
const { src, dest, watch, parallel } = require('gulp')

const scss   = require('gulp-sass')(require('sass'))
const concat = require('gulp-concat')
const browserSync = require('browser-sync').create();

function browsersync() {
    browserSync.init({
        server: {
            baseDir: "app/", 
        }
    }) 
}

function styles() {
    return src('app/scss/style.scss')
        //очерёдность имеет значение!
        //compressed - сжимает созданный файл style.css
        //expanded - отображает в обычном виде
        .pipe(scss, js({outputStyle: 'compressed'}))
        //для переименования style.css в style.min.css
        .pipe(concat('style.min.css'))
        .pipe(concat('main.min.js'))
        //создаём папку css в парке app с файлом style.css
        .pipe(dest('app/css', 'app/js'))
        .pipe(browserSync.stream())       
}

function watching() {
    //следить за изменениями всех файлов расширения scss и запуска ф-цию styles
    watch(['app/scss/**/*.scss'], styles)
    watch(['app/*.html']).on('change', browserSync.reload);
}

exports.styles = styles
exports.watching = watching
exports.browsersync = browsersync

//запускаем сразу обе ф-ции
exports.default = parallel(browsersync, watching)


