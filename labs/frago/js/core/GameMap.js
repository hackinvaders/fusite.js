(function(window, undefined) {

	function Map() {
		this.initialize();
	}

	var m = Map.prototype;

	/*
	* Width of the map in tiles
	*/
	m.width = 0;

	/*
	* Height of the map in tiles
	*/
	m.height = 0;

	/*
	* Know if the assets are loaded
	*/
	m._assetsLoaded = false;

	/*
	* Load and retreive all the assets required for the map
	*/
	m._assetsManager;

	/*
	* Maps array
	*/
	m.mapData;

	/*
	* Viewport positions
	*/
	m.viewport;

	/*
	* Temporal array of tiles
	*/
	m.tiles;

	/*
	* Constructor
	*/
	m.initialize = function() {

	}

	/*
	* Draw map
	*/
	m.draw = function( callback ) {
		if (!this._assetsLoaded) {
			this._loadAssets();
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
	* Update map position according to cordinates
	*/
	m.update = function( position ) {
		this.viewport = position;
		this.draw();
	}

	/*
	* Draw a single tile into the map
	*/
	m._drawTile = function(x, y, tile) {
		var asset = this._assetsManager.getAsset( tile.ground );
		this.ctx.drawImage( asset, x * 16, y * 16 );

		if (tile.item) {
			asset =this._assetsManager.getAsset( tile.item );
			this.ctx.drawImage( asset, x * 16, y * 16 );
		}
	},

	/*
	* Load all assets required for the map
	*/
	m._loadAssets = function() {
		var tilesLoaded = 0,
			self = this;

		this._assetsManager = new AssetManager();

		for(var i=0, len=this.tiles.length; i < len; i++) {
			this._assetsManager.queueDownload(this.tiles[i]);
		}
		this._assetsManager.downloadAll(function(){
			tilesLoaded++;
			
			if (tilesLoaded == self.tiles.length) {
				self._assetsLoaded = true;
				self.draw();
				self.tiles = null;
			}
		});
	}

window.GameMap = Map;
})(window);