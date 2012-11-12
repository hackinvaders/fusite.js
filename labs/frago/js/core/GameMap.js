(function(window, undefined) {

	function Map() {
		this.initialize();
	}

	var m = Map.prototype = new GameObject();

	/*
	* Width of the map in tiles
	*/
	m.width = 0;

	/*
	* Height of the map in tiles
	*/
	m.height = 0;

	/*
	* Maps array
	*/
	m.mapData;

	/*
	* Viewport positions
	*/
	m.viewport = null;

	/*
	* Temporal array of tiles
	*/
	m.tiles = [];

	/*
	* Constructor
	*/
	m.initialize = function() {
		this.viewport = new GameViewport();
	}

	/*
	* Draw map
	*/
	m.draw = function() {
		if (!this.assetsLoaded) {
			this.loadAssets( this.tiles, $.proxy(this._callback_render, this) );
			return;
		}

		var mapX = 0,
			mapY = 0,
			tile;

		for (var j=0; j < this.height; j++) {
			for (var i=0; i < this.width; i++) {
				mapX = i + this.viewport.x;
				mapY = j + this.viewport.y;

				tile = (this.mapData[mapY] && this.mapData[mapY][mapX]) ? this.mapData[mapY][mapX] : { ground: 0 };
				this._drawTile(i, j, tile);
			}
		}
	}

	/*
	* Draw a single tile into the map
	*/
	m._drawTile = function(x, y, tile) {
		var asset = this._assetsManager.getAsset( tile.ground );
		this.stage.drawImage( asset, x * 16, y * 16 );

		if (tile.item) {
			asset =this._assetsManager.getAsset( tile.item );
			this.stage.drawImage( asset, x * 16, y * 16 );
		}
	}

	/*
	* On assets loaded
	*/
	m._callback_render = function() {
		this.draw();
		this.tiles = null;
	}

window.GameMap = Map;
})(window);