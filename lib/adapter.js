artjs.$DT(artjs.SpecApi, window);

__karma__.start = function(tc) {
  var view = new KarmaView(this, artjs.SpecRunner);
  
  view.run();
};
