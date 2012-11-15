(function(window, undefined) {

	var GameStage = function(canvas) {
		this.initialize();
	}

	GameStage.canInput = false;

	var g = GameStage.prototype;

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
	* Reference to the canvas of the application
	*/
	g.stage = null;

	/*
	* Constructor
	*/
	g.initialize = function() {
		this.stage = Stage.getInstance();
	}

	/*
	* Start Game Stage
	*/
	g.start = function(map, tiles) {
		//this.context.translate(0, 8);

		if (map === undefined || tiles === undefined) return;

		GameStage.canInput = true;

		// Init Game Map
		this._map = new GameMap();
		this._map.mapData = map;
		this._map.tiles = tiles
		this._map.width = this.stage.width() / this._TILES_SIZE;
		this._map.height = this.stage.height() / this._TILES_SIZE;
		this._map.draw();

		// Init Game Controls
		this._initGameControls();
	}

	/*
	* Add player to the map
	*/
	g.addPlayer = function(options) {
		this._player = new GamePlayer();
		this._player.name = options.name;
		this._player.sprites = options.sprites;
		this._player.draw();
	}

	/*
	* Initializing event listeners for control the game
	*/
	g._initGameControls = function() {
		$(window.document).on('keydown', $.proxy(function(e) {
			if (GameStage.canInput) {
				switch(e.which) {
					case 38: // up
						this._map.viewport.y--;
						pos = 'up';
						break;
					case 40: // down
						this._map.viewport.y++;
						pos = 'down';
						break;
					case 37: // left
						this._map.viewport.x--;
						pos = 'left';
						break;
					case 39: // right
						this._map.viewport.x++;
						pos = 'right';
						break;
					default:
						break;
				}

				// render map
				this._map.draw();
				
				// render player
				// if (this._player) this._player.draw( pos );
				if (this._player) this._player.move( pos );
			}
		}, this));

	}

	/*
	* Send message to the output div
	*/
	g.output = function(message) {
		this._outhnd.innerHTML += '<br/>' + message;
	}

window.GameStage = GameStage;
})(window);