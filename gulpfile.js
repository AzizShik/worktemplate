const gulp = require('gulp');
const del = require('del');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');
const fileinclude = require('gulp-file-include');
const webp = require('gulp-webp');
const imagemin = require('gulp-imagemin');
const rename = require("gulp-rename");
const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const htmlmin = require('gulp-htmlmin');
const gcmq = require('gulp-group-css-media-queries');
const smartgrid = require('smart-grid');


function watch() {
  browserSync.init({
    server: {
      baseDir: "./build"
    }
  });

  gulp.watch('./src/**/*.html', html)
  gulp.watch('./src/sass/**/*.scss', styles)
  gulp.watch('./src/js/main.js', scripts)
  gulp.watch('./src/images/**/*.{jpg,jpeg,png,webp,svg,gif}', { usePolling: true }, images);
}

function clean() {
  return del('./build/*')
}

function html() {
  return gulp.src('./src/**/index.html')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('./build'))
    .pipe(browserSync.stream());
}



function images() {
  return gulp.src('./src/img/**/*.*')
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({ quality: 85, progressive: true }),
      imagemin.optipng({ optimizationLevel: 3 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]))
    .pipe(gulp.dest('./build/img'));
}

function imageToWebp(done) {
  gulp.src('./src/img/**/*.*')
    .pipe(webp())
    .pipe(gulp.dest('./build/img'))
  done();
}



function styles() {
  return gulp.src('./src/sass/main.scss')
    .pipe(gcmq())
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true }))
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
}

function scripts() {
  return gulp.src('./src/js/*.js')
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest('./build/js/main.js'))
    .pipe(browserSync.stream());
}

let build = gulp.parallel(html, styles, scripts, images, imageToWebp);
let buildWithClean = gulp.series(clean, build);
let dev = gulp.series(buildWithClean, watch);

gulp.task('build', buildWithClean);
gulp.task('dev', dev);


var settings = {
  outputStyle: 'scss', /* less || scss || sass || styl */
  columns: 12, /* number of grid columns */
  offset: '30px', /* gutter width px || % || rem */
  mobileFirst: false, /* mobileFirst ? 'min-width' : 'max-width' */
  container: {
      maxWidth: '1200px', /* max-width оn very large screen */
      fields: '30px' /* side fields */
  },
  breakPoints: {
      lg: {
          width: '1100px', /* -> @media (max-width: 1100px) */
      },
      md: {
          width: '960px'
      },
      sm: {
          width: '780px',
          fields: '15px' /* set fields only if you want to change container.fields */
      },
      xs: {
          width: '560px'
      }
      /* 
      We can create any quantity of break points.

      some_name: {
          width: 'Npx',
          fields: 'N(px|%|rem)',
          offset: 'N(px|%|rem)'
      }
      */
  }
};

smartgrid('./src/sass/', settings);