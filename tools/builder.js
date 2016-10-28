var path = require('path');
var SystemBuilder = require('systemjs-builder');
var builder = new SystemBuilder();

builder.loadConfig('./tools/systemjs.config.js')
.then(function(){
  var outputFile = './public/bundle.min.js';
  return builder.buildStatic('app', outputFile, {
    minify: true,
    mangle: true,
    rollup: true
  });
})
.then(function() {
  console.log('bundle built successfully!');
})
.catch(function(err) {
  console.log('Build error');
  console.log(err);
});
