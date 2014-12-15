var KarmaView = artjs.Class(
  function(karma, runner) {
    this._karma = karma;
    this._runner = runner;
    
    this._runner.onItComplete.add(artjs.$D(this, '_onItComplete'));
    this._runner.onComplete.add(artjs.$D(this, '_onComplete'));
  },
  {
    run: function() {
      var its = this._runner.count();

      this._karma.info({total: its});
      this._runner.run();
    },
    
    _onItComplete: function(runner) {
      var it = runner.getCurrentTest();
      var path = it.getPath().concat();
      
      this._karma.result({
        description: it.facet,
        success: it.isSuccess(),
        suite: artjs.ArrayUtils.invoke(path, 'toString'),
        log: []
      });
    },
    
    _onComplete: function(runner) {
      var its = runner.getIts();
      var duration = runner.getDuration();
      var failures = artjs.ArrayUtils.reject(artjs.ArrayUtils.pluck(its, 'success'));
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
