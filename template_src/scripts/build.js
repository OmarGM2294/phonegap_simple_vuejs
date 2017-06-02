var fs = require('fs');
var browserify = require('browserify');
var vueify = require('vueify');
var sys = require('sys')
var exec = require('child_process').exec;

console.log("Building...");

browserify('www/src/main.js')
  .transform(vueify)
  .bundle()
  .pipe(fs.createWriteStream('www/dist/build.js'))
