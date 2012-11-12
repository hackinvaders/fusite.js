(function(window, undefined) {

	function Singleton() {}

	var instances = {};

	Singleton.getInstance = function(_class) {
		if (_class === undefined) return;
		if (instances[_class] === undefined) {
			instances[_class] = new window[_class]();
		}

		return instances[_class];
	}

window.Singleton = Singleton;
})(window);