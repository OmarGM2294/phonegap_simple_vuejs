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

watch.watchTree('../www', function (f, curr, prev) {
    if (typeof f == "object" && prev === null && curr === null) {
    } else if (prev === null) {
	// f is a new file
	console.log("New file: "+f);
    } else if (curr.nlink === 0) {
      	// f was removed
	console.log("File: "+f+" removed.");
    } else {
      	// f was changed
	console.log("File: "+f+" changed.");
    }
     	exec("watchify"); 
})
