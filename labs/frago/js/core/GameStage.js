(function(window, undefined) {

	var GameStage = function(canvas) {
		this.initialize();
	}
	var g = GameStage.prototype = new Stage;
	g.parent = Stage.prototype;

	/*
	* Viewport instance
	*/
	g._viewport = null;

	/*
	* Size per tile
	*/
	g._TILES_SIZE = 16;

	/*
	* Handle div output
	*/
	g._outhnd = window.document.getElementById('output');

	/*
	* Constructor
	*/
	g.initialize = function() {
		this.parent.initialize(canvas);
	}

	/*
	* Start Game Stage
	*/
	g.start = function(map, tiles) {
		this.output('starting fusite...');

		this.context.translate(0, 8);

		// Init viewport
		this._viewport = new GameViewport();

		if (map === undefined || tiles === undefined) return;

		// Init map
		this._map = new GameMap();
		this._map.mapData = map;
		this._map.tiles = tiles
		this._map.viewport = this._viewport.position();
		this._map.ctx = this.context;
		this._map.width = this.width() / this._TILES_SIZE;
		this._map.height = this.height() / this._TILES_SIZE;

		this.drawMap();
	}

	/*
	* Render map
	*/
	g.drawMap = function() {
		this.output('drawing map...');

		this._map.draw();
	}

	/*
	* Initializing GameMap
	*/
	g._initMap = function(map) {
		
	}

	/*
	* Send message to the output div
	*/
	g.output = function(message) {
		this._outhnd.innerHTML += '<br/>' + message;
	}

window.GameStage = GameStage;
})(window);