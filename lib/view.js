var KarmaView = artjs.Class(
  function(karma, runner) {
    this._karma = karma;
    this._runner = runner;
    
    this._runner.onResult.add(artjs.$D(this, '_onResult'));
    this._runner.onComplete.add(artjs.$D(this, '_onComplete'));
  },
  {
    run: function() {
      var its = this._runner.count();
      console.log(its);
      this._karma.info({total: its});
      this._runner.run();
    },
    
    _onResult: function(runner) {
      var result = runner.getLastResult();
      
      this._karma.result({
        description: result.getPathAsString(),
        success: result.value,
        suite: result.path,
        log: []
      });
    },
    
    _onComplete: function(runner) {
      var results = runner.getResults();
      var duration = runner.getDuration();
      var failures = artjs.ArrayUtils.select(results, this._isFailure, this);
      var success = artjs.ArrayUtils.isEmpty(failures);
      
      this._karma.complete(
        {
          duration: duration
        }
      );
    },
    
    _isFailure: function(i) {
      return !i.value;
    }
  }
);
