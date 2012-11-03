(function(window, undefined) {

	function Viewport() {
		this.initialize();
	}

	var v = Viewport.prototype;

	/*
	* Position x of the viewport
	*/
	v.x = 0;

	/*
	* Position Y of the viewport
	*/
	v.y = 0;

	/*
	* Init viewport
	*/
	v.initialize = function() {

	}

	/*
	* Get viewport position
	*/
	v.position = function() {
		return {
			x: this.x,
			y: this.y
		}
	}

window.GameViewport = Viewport
})(window);