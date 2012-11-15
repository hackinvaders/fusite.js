(function(window, undefined) {

	function GameObject() {
		this.initialize();
	}

	var g = GameObject.prototype;

	/*
	* Reference to the context of the canvas to draw the Game Objects
	*/
	g.stage = null;

	/*
	* Viewport instance
	*/
	g.viewport = null;

	/*
	* Load and retreive all the assets required for the map
	*/
	g.assetManager = null;

	/*
	* Know if all assets are loaded
	*/
	g.assetsLoaded = false;

	/*
	* Constructor
	*/
	g.initialize = function() {
		// init stage
		this.stage = Stage.getInstance().context;

		// Init asset manager
		this.assetsManager = new AssetManager();

		// Init game viewport
		this.viewport = new GameViewport();
	}

	/*
	* Draw the GameObject into the stage (function to override)
	*/
	g.draw = function() {
		return this;
	}

	/*
	* Update the GameObject into the stage (function to override)
	*/
	g.update = function() {
		return this;
	}

	/*
	* Load assets required for Game Object
	*/
	g.loadAssets = function(assets, callback) {
		var assetsLoaded = 0,
			self = this;

		for(var i=0, len=assets.length; i < len; i++) {
			this.assetsManager.queueDownload(assets[i]);
		}
		this.assetsManager.downloadAll(function(){
			assetsLoaded++;
			
			if (assetsLoaded == assets.length) {
				self.assetsLoaded = true;
				if (callback) callback();				
				assets = null;
			}
		});
	}

	/*
	* callback function for render the map
	*/
	g.drawMap = function() {
		return false;
	}

window.GameObject = GameObject;
})(window)