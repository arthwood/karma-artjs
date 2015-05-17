var path = require('path');
var artjsPath = require.resolve('artjs');

var pattern = function(file) {
  return {pattern: file, included: true, served: true, watched: false};
};

var toArtJsPath = function(file) {
  return path.resolve(artjsPath, '../' + file + '.js');
};

var toLocalPath = function(file) {
  return __dirname + '/' + file + '.js';
};

var pushToPaths = function(paths, files, strategy) {
  for (var i in files) {
    if (files.hasOwnProperty(i)) {
      paths.push(strategy(files[i]));
    }
  }
};

var framework = function(files) {
  var paths = [];
  var artjsFiles = [
    'Initialize',
    'utils/Object',
    'utils/**/*',
    'events/**/Channel',
    'component/**/*',
    'data/**/*',
    'dom/**/*',
    'events/**/*',
    'math/**/*',
    'net/**/*',
    'spec/matcher/Base',
    'spec/node/Base',
    'spec/runner/Base',
    'spec/**/*',
    'template/**/*',
    'transition/**/*',
    'ui/**/*',
    'view/**/*',
    'Finalize',
    'Shortcuts'
  ];
  
  var localFiles = [
    'view',
    'adapter'
  ];
  
  pushToPaths(paths, artjsFiles, toArtJsPath);
  pushToPaths(paths, localFiles, toLocalPath);
  
  paths = paths.reverse();
  
  for (var i in paths) {
    if (paths.hasOwnProperty(i)) {
      files.unshift(pattern(paths[i]));
    }
  }
};

framework.$inject = ['config.files'];

module.exports = {'framework:artjs': ['factory', framework]};
