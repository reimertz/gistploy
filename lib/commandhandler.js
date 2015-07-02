"use strict";

var _ = require('lodash'),
    chalk = require("chalk"),
    Promise = require('bluebird'),
    gulp = require('gulp'),
    args = require('minimist')(process.argv.slice(2)),

    intercept = require('gulp-intercept'),
    inline = require('gulp-inline'),
    uglify = require('gulp-uglify'),
    minifyCss = require('gulp-minify-css'),

    gistCreator = require('../lib/gistCreator'),
    urlShortener = require('../lib/urlShortener'),

    open = require('open');



function commandHandler(arg){
  var isPublic = (args._.indexOf('public') > -1);
  var shouldUglify = (args._.indexOf('uglify') > -1);

  gulp.src('index.html')
  .pipe(inline({
    base: '/',
    css: minifyCss()
  }))
  .pipe(intercept(function(file){
    gistCreator.create(file.contents.toString(), isPublic)
      .then(function(response){
        var gistRawUrl = JSON.parse(response).files['index.html'].raw_url;

        urlShortener.create(gistRawUrl)
          .then(function(code){
            var finishedString = (isPublic) ? 'Successfully ' : 'Anonymously ' + 'deployed to http://git.io/' + code;

            console.log(finishedString);
            open('http://git.io/' + code);
        });

    }).catch(function(err){

      console.error("something went wrong: " + err);
      process.exit();
    });
  }));

}
module.exports = {
  gistploy: function(arg) {
    return commandHandler(arg);
  }
}