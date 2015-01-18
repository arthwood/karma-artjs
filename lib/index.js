var path = require('path');

var pattern = function(file) {
  return {pattern: file, included: true, served: true, watched: false};
};

var framework = function(files) {
  var artjsPath = require.resolve('artjs');
  
  var paths = [
    path.resolve(artjsPath, '../index.js'),
    path.resolve(artjsPath, '../../utils/Object.js'),
    path.resolve(artjsPath, '../../utils/**/*.js'),
    path.resolve(artjsPath, '../../data/**/*.js'),
    path.resolve(artjsPath, '../../dom/**/*.js'),
    path.resolve(artjsPath, '../../events/**/*.js'),
    path.resolve(artjsPath, '../../math/**/*.js'),
    path.resolve(artjsPath, '../../spec/matcher/Base.js'),
    path.resolve(artjsPath, '../../spec/node/Base.js'),
    path.resolve(artjsPath, '../../spec/runner/Base.js'),
    path.resolve(artjsPath, '../../spec/**/*.js'),
    path.resolve(artjsPath, '../../Shortcuts.js'),
    __dirname + '/view.js',
    __dirname + '/adapter.js'
  ].reverse();
  
  for (var i in paths) {
    files.unshift(pattern(paths[i]));
  }
};

framework.$inject = ['config.files'];

module.exports = {'framework:artjs': ['factory', framework]};
