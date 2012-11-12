( function(window, undefined)  {

	function GamePlayer() {
		this.initialize();
	}

	var p = GamePlayer.prototype = new GameObject();

	/*
	* Position of the player
	*/
	p._spritePosition = 's0';

	/*
	* Sprites of the player
	*/
	p.sprites = [];

	/*
	* Constructor
	*/
	p.initialize = function() {

	}

	/*
	* Draw player on the map
	*/
	p.draw = function( orientation ) {
		if (!this.assetsLoaded) {
			this.loadAssets( this.sprites, $.proxy(this._callback_render, this) );
			return;
		}

		if (orientation) this._spritePosition = orientation;

		var loc = this._calculateLocation();
		this.stage.drawImage( this._assetsManager.getAsset(this._spritePosition), loc.left, loc.top );
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
			width: Fusite.SCREEN_WIDTH,
			height: Fusite.SCREEN_HEIGHT
		};

		var x = (screen.width / 2) - (character.width / 2),
			y = (screen.height / 2)+ 8 - (character.height);

		return {left: x, top: y};
	}

	/*
	* On assets loaded
	*/
	p._callback_render = function() {
		this.draw();
		this.sprites = null;
	}

window.GamePlayer = GamePlayer;
})(window)