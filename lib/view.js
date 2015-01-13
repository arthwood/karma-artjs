var KarmaSpecView = artjs.Class(
  function(karma) {
    this.super(arguments);
    
    this._karma = karma;
  },
  {
    afterDryRun: function() {
      this._karma.info({total: artjs.It.instancesWithFocus().length});
    },
    
    onItComplete: function(runner) {
      var it = runner.getCurrentTest();
      var path = it.getPath().concat();
      
      this._karma.result({
        description: it.facet,
        success: it.isSuccess(),
        suite: artjs.ArrayUtils.invoke(path, 'toString'),
        log: []
      });
    },
    
    onComplete: function(runner) {
      var duration = runner.getDuration();
      var failures = artjs.ArrayUtils.reject(artjs.ArrayUtils.pluck(artjs.It.instances, 'success'));
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
  },
  null,
  artjs.BaseSpecView
);
