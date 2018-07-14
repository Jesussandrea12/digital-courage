var gulp = require('gulp')
var postcss = require('gulp-postcss')
var rucksack = require('rucksack-css')
var cssnested = require('postcss-nested')
var cssnext = require('postcss-cssnext')
var mixins = require('postcss-mixins')
var lost = require('lost')
var atImport = require('postcss-import')
var csswring = require('csswring')
var mqpacker = require('css-mqpacker')
var browserSync = require('browser-sync').create()

// Servidor de desarrollo
gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
})

// Tarea para procesar el CSS
gulp.task('css', function () {
  var processors = [
    atImport(),
    mixins(),
    lost(),
    rucksack(),
    cssnested,
    cssnext({ browsers: ['> 5%', 'ie 8']}),
    mqpacker(),
    csswring()
  ]

  return gulp.src('./src/main.css')
    .pipe(postcss(processors))
    .pipe(gulp.dest('./dist/css'))
    .pipe(browserSync.stream())
})

// Tarea para vigilar los cambios
gulp.task('watch', function () {
  gulp.watch('./src/*.css', ['css'])
  gulp.watch('./src/**/*.css', ['css'])
  gulp.watch('./dist/js/*.js').on('change', browserSync.reload)
  gulp.watch('./*.html').on('change', browserSync.reload)
})

gulp.task('default', ['watch', 'serve'])
