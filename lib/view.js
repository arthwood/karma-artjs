var KarmaSpecView = artjs.Class(
  function(karma, tc) {
    this.super();
    
    this._karma = karma;
    this._tc = tc;
  },
  {
    afterDryRun: function() {
      this._karma.info({
        total: artjs.It.getRunInstances().length
      });
    },
    
    onItComplete: function(runner) {
      var it = runner.getCurrentTest();
      var path = it.getPath().concat();
      var success = it.isSuccess();
      var log = [];
      
      if (!success) {
        log.push(it.failureText());
      }
      
      this._karma.result({
        description: it.facet,
        success: success,
        suite: artjs.Array.invoke(path, 'toString'),
        log: log
      });
    },
    
    onComplete: function(runner) {
      var duration = runner.getDuration();

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
