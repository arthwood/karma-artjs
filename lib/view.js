var KarmaSpecView = artjs.Class(
  function(karma, tc) {
    this.super();
    
    this._karma = karma;
    this._tc = tc;
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
        suite: artjs.Array.invoke(path, 'toString'),
        log: []
      });
    },
    
    onComplete: function(runner) {
      var duration = runner.getDuration();
      var failures = artjs.Array.reject(artjs.Array.pluck(artjs.It.instances, 'success'));
      var success = artjs.Array.isEmpty(failures);

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
  {
    run: function(karma, tc) {
      var view = new this(karma, tc);
  
      artjs.Spec.init(view);
      artjs.Spec.run();
    }
  },
  artjs.BaseSpecView
);
