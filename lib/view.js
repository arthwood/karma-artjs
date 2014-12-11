var KarmaView = {
  init: function() {
    artjs.SpecRunner.onResult.add(artjs.$D(this, '_onResult'));
    artjs.SpecRunner.onComplete.add(artjs.$D(this, '_onComplete'));
  },
  
  run: function() {
    artjs.SpecRunner.run();
  },
  
  _onResult: function(runner) {
    var result = runner.getLastResult();

    //__karma__.info(['.']);
    __karma__.result({
      description: result.getPathAsString(),
      success: true,
      suite: [],
      log: []
    });
  },
  
  _onComplete: function(runner) {
    var results = runner.getResults();
    var duration = runner.getDuration();
    var failures = artjs.ArrayUtils.select(results, this._isFailure, this);
    var success = artjs.ArrayUtils.isEmpty(failures);
    
    __karma__.complete();
  },
  
  _isFailure: function(i) {
    return !i.value;
  }
};
