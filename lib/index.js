var path = require('path');

var pattern = function(file) {
  return {pattern: file, included: true, served: true, watched: false};
};

var framework = function(files) {
  var artjsPath = require.resolve('artjs');
  
  var paths = [
    path.resolve(artjsPath, '../index.js'),
    __dirname + '/view.js',
    path.resolve(artjsPath, '../../utils/**/*.js'),
    path.resolve(artjsPath, '../../events/**/*.js'),
    path.resolve(artjsPath, '../../math/**/*.js'),
    path.resolve(artjsPath, '../../spec/matchers/Base.js'),
    path.resolve(artjsPath, '../../spec/**/*.js'),
    path.resolve(artjsPath, '../init.js'),
    __dirname + '/adapter.js'
  ].reverse();
  
  for (var i in paths) {
    files.unshift(pattern(paths[i]));
  }
};

framework.$inject = ['config.files'];

module.exports = {'framework:artjs': ['factory', framework]};
