const gulp = require( 'gulp' ),
      babelify        = require('babelify'),
      browserify      = require('browserify'),
      buffer          = require('vinyl-buffer')
      source          = require('vinyl-source-stream'),
      terser          = require('gulp-terser')
      rename          = require('gulp-rename');



// Error handler
function handleError(err) {
  console.log(err.toString());
  this.emit('end');
}

// Build and transpile js
function build() {
  const bundler = browserify('src/index.js').transform(
    'babelify',
    { presets: ['@babel/preset-env'] }
  )
  return bundler.bundle()
  .on('error', handleError)
  .pipe(source('index.js'))
  .pipe(buffer())
  .pipe(terser({
      mangle: false,
      compress: true,
  }))
  .pipe(rename("ScrollNav.js"))
  .pipe(gulp.dest('dist/'));
}


exports.build = build
exports.default = gulp.parallel(build)
