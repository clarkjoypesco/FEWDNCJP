/*eslint-env node */
const gulp = require("gulp");
const eslint = require("gulp-eslint");
const sass = require("gulp-sass");
const imagemin = require("gulp-imagemin");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");

const browserSync = require("browser-sync").create();
const jasmineBrowser = require("gulp-jasmine-browser");

// gulp.task("default", function() {
//   // code for your default task goes here
//   return console.log("App is Starting...");
// });
//Logs Message
gulp.task("message", function() {
  return console.log("Gulp is running....");
});

//Copy All HTML files
gulp.task("copyHtml", function() {
  gulp.src("src/*.html").pipe(gulp.dest("dist"));
});

gulp.task("sass", function() {
  gulp
    .src("src/sass/*.scss")
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    .on("error", sass.logError)

    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

// gulp.task(
//   "default",
//   gulp.parallel(["message", "copyHtml", "sass", "lint", "watch"])
// );

//Optimize Images
gulp.task("imageMin", () =>
  gulp
    .src("src/images/*")
    .pipe(imagemin())
    .pipe(gulp.dest("dist/images"))
);

//Scripts
gulp.task("scripts", function() {
  gulp
    .src("src/js/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("dist/js"));
});

gulp.task("lint", () => {
  return (
    gulp
      .src(["src/js/*.js"])
      // eslint() attaches the lint output to the "eslint" property
      // of the file object so it can be used by other modules.
      .pipe(eslint())
      // eslint.format() outputs the lint results to the console.
      // Alternatively use eslint.formatEach() (see Docs).
      .pipe(eslint.format())
      // To have the process exit with an error code (1) on
      // lint error, return the stream and pipe to failAfterError last.
      .pipe(eslint.failAfterError())
  );
});

gulp.task(
  "default",
  gulp.parallel(["message", "copyHtml", "imageMin", "sass", "scripts"])
);

gulp.task("default", function() {
  //   gulp.watch("scr/js/*.js", ["scripts"]);
  //   gulp.watch(`scr/images/*`, ["imageMin"]);
  gulp.watch("src/sass/*.scss", gulp.series("sass"));
  gulp.watch("src/*.html", gulp.series("copyHtml"));
  gulp.watch("src/js/*.js", gulp.series("scripts"));
  gulp.watch(`src/images/*`, gulp.series("imageMin"));

  gulp.watch("src/js/*.js", gulp.series("lint"));
  browserSync.init({
    server: "./dist"
  });
});

//Test
gulp.task("tests", function() {
  gulp
    .src("tests/spec/extraSpec.js")
    .pipe(jasmineBrowser.specRunner())
    .pipe(jasmineBrowser.server({ port: 3001 }));
});
