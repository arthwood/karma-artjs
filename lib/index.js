function init() {
  var artjs = require('artjs');
  
  artjs.$DT(artjs.SpecApi, window);
}

module.exports = {
  'framework:artjs': ['factory', init]
};
