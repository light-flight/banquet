module.exports = {
  images      : true,
  fonts       : true,
  static      : true,
  svgSprite   : true,
  ghPages     : true,
  stylesheets : true,

  javascripts: {
    entry: {
      // files paths are relative to
      // javascripts.dest in path-config.json
      app: ["./app.js"]
    }
  },

  browserSync: {
    server: {
      // should match `dest` in
      // path-config.json
      baseDir: 'public'
    }
  },

  production: {
    rev: true
  },

  html: {
    alternateTask: function(gulp) {

      var pug = require('gulp-pug');
      return gulp
        .src('html/*.pug')
        .pipe(pug({
          // Your options in here.
        }))
        .pipe(gulp.dest('./dist/'))

    }
  }
}
