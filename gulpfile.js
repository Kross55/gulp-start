//1. шаг - npm install --global gulp-cli
//2. шаг - npm init 
//3. шаг - npm install --save-dev gulp
//4. шаг - npm install --save-dev sass
//5. шаг - npm install --save-dev gulp-concat //для конкатинации
//6. шаг - npm i --save-dev browser-sync//для обновления html, css and js
//7. шаг - npm install --save-dev gulp-uglify-es
//8. шаг - npm i --save-dev jquery 

//watch для автоматическо слежения за проектом(обновления изменений)
//parallel чтобы ф-ции могли работать параллельно
const { src, dest, watch, parallel } = require('gulp')

const scss        = require('gulp-sass')(require('sass'))
const concat      = require('gulp-concat')
const browserSync = require('browser-sync').create();
const uglify      = require('gulp-uglify-es').default()

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
        //создаём папку css в парке app с файлом style.css
        .pipe(dest('app/css'))
        .pipe(browserSync.stream())       
}

function scripts() {
    return src([
        'node_modules/jquery/dist/jquery.js',
        'app/js/main.js'
    ])
    .pipe(concat('main.min.js'))
    .pipe(uglify())
    .pipe(dest('app/js'))
    .pipe(browserSync.stream())
}

function watching() {
    //следить за изменениями всех файлов расширения scss и запуска ф-цию styles
    watch(['app/scss/**/*.scss'], styles)
    watch(['app/js/main.min.js'], scripts)
    watch(['app/*.html']).on('change', browserSync.reload)
    watch(['app/*.js']).on('change', browserSync.reload)
}

exports.styles = styles
exports.scripts = scripts
exports.watching = watching
exports.browsersync = browsersync

//запускаем сразу обе ф-ции
exports.default = parallel(browsersync, watching, scripts)


