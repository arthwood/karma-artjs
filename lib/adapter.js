artjs.$DT(artjs.SpecApi, window);

__karma__.start = function(tc) {
  this.info({total: artjs.SpecRunner.getTotalSpecsNum()});
  
  KarmaView.init();
  KarmaView.run();
};
