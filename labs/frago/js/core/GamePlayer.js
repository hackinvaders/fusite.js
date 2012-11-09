( function(window, undefined)  {

	function GamePlayer() {
		this.initialize();
	}

	var p = GamePlayer.prototype;

	p._assetManager;

	p.stage;

	p._spritePosition = 's0';

	/*
	* Constructor
	*/
	p.initialize = function(ctx) {
		if (!ctx) return;

		this.stage = ctx;
	}

	/*
	* Draw player on the map
	*/
	p.draw = function(assets) {
		if (!this.stage) return;

		this._loadAssets(assets);
		assets = null;
	},

	/*
	* Calculate the location of the player in the map
	*/
	p._calculateLocation = function() {
		var character = {
			width: this._assetsManager.getAsset('n0').width,
			height: this._assetsManager.getAsset('n0').height
		};

		var screen = {
			width: 144, // Fix me: get data from Fusite object
			height: 144 // Fix me: get data from Fusite object
		};

		var x = (screen.width / 2) - (character.width / 2),
			y = (screen.height / 2)+ 8 - (character.height);

		return {left: x, top: y};
	}

	/*
	* Load all assets required for the map
	*/
	p._loadAssets = function(assets) {
		var assetsLoaded = 0,
			self = this;

		this._assetsManager = new AssetManager();

		for(var i=0, len=assets.length; i < len; i++) {
			this._assetsManager.queueDownload(assets[i]);
		}
		this._assetsManager.downloadAll(function(){
			assetsLoaded++;
			
			if (assetsLoaded == assets.length) {
				self._assetsLoaded = true;
				
				self._render();
				
				assets = null;
			}
		});
	}

	p._render = function() {
		var loc = this._calculateLocation();
		this.stage.drawImage( this._assetsManager.getAsset(this._spritePosition), loc.left, loc.top );
	}

	p.update = function(position) {
		this._spritePosition = position;
		this._render();
	}

window.GamePlayer = GamePlayer;
})(window)