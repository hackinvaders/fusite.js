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
	* Temporal array of tiles
	*/
	m.tiles = [];

	/*
	* Constructor
	*/
	m.initialize = function() {
		this.drawMap = this.draw;
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
			tile,
			iMax = this.width + this.viewport.overflowTile,
			jMax = this.height + this.viewport.overflowTile;

		for (var j=-this.viewport.overflowTile; j < jMax; j++) {
			for (var i=-this.viewport.overflowTile; i < iMax; i++) {
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
		var asset = this.assetsManager.getAsset( tile.ground ),
			rx = x * 16 + this.viewport.playerOffsetX,
			ry = y * 16 + this.viewport.playerOffsetY;

		this.stage.drawImage( asset, rx, ry );

		if (tile.item) {
			asset =this.assetsManager.getAsset( tile.item );
			this.stage.drawImage( asset, rx, ry );
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