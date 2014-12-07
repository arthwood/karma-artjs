var path = require('path');

var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};

function init(files, config) {
  //var path = path.dirname(require.resolve('artjs'));
  //files.unshift(createPattern(__dirname + '/adapter.js'));
  //files.unshift(createPattern(path + '/art.js'));
}


init.$inject = ['config.files'];

module.exports = {
  'framework:artjs': ['factory', init]
};
