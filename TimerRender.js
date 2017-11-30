function Timer() {
	var loaded = false;
	var intervalId = null;
	this.start = function() {
		if (!loaded && this.isEnabled()) {
			loaded = true;
			
			var control = this;
			intervalId = window.setInterval(function(){
					if (control.isEnabled() && control.Elapsed)
					{
						control.Elapsed();
					}
				}, this.Interval);
		}

		if (!this.isEnabled() && intervalId) {
			window.clearInterval(intervalId);
			loaded = false;
		}
	}

	this.isEnabled = function() {
		return gx.lang.gxBoolean(this.Enabled);
	}

	this.destroy = function () {
		if (intervalId) {
			window.clearInterval(intervalId);
		}
	}
}
