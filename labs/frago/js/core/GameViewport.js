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
	* Offset player in x axis
	*/
	v.playerOffsetX = 0;

	/*
	* Offset player in y axis
	*/
	v.playerOffsetY = 0;

	v.overflowTile = 1;

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