__karma__.start = function(tc) {
  var view = new KarmaSpecView(this);
  
  artjs.Spec.init(view);
  artjs.Spec.run();
};
