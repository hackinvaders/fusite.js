(function(window, undefined) {

	var Stage = function(canvas) {
		this.initialize(canvas);
	}
	var s = Stage.prototype;

	/*
	* Stage canvas
	*/
	s.stage = null;

	/*
	* Canvas context
	*/
	s.context = null;

	/*
	* Constructor
	*/
	s.initialize = function(canvas) {
		if (typeof(canvas) === "undefined") return false;

		this.stage = (canvas instanceof HTMLCanvasElement) ? canvas : window.document.appendChild( window.document.createElement('canvas') );
		this.stage.width = 480;
		this.stage.height = 320;

		this.context = this.stage.getContext('2d');
	}

	/*
  	* Set attributes to the canvas
  	*/
  	s.setAttr = function(attr, value) {
	   	this.stage[attr] = value;
	}

	/*
	* Get or set canvas width
	*/
	s.width = function(width) {
		if (width === undefined) return this.stage.width;
		this.stage.width = width;
	}

	/*
	* Get or set canvas height
	*/
	s.height = function(height) {
		if (height === undefined) return this.stage.height;
		this.stage.height = height;
	}

window.Stage = Stage;
})(window);