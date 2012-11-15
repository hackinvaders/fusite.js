( function(window, undefined)  {

	function GamePlayer() {
		this.initialize();
	}

	var p = GamePlayer.prototype = new GameObject();

	/*
	* Sprites of the player
	*/
	p.sprites = [];

	p._leftLeg = false;

	p._spriteDirection = 's';

	p._spriteIndex = 0;

	/*
	* Constructor
	*/
	p.initialize = function() {

	}

	/*
	* Draw player on the map
	*/
	p.draw = function() {
		if (!this.assetsLoaded) {
			this.loadAssets( this.sprites, $.proxy(this._callback_render, this) );
			return;
		}

		var loc = this._calculateLocation();
		this.stage.drawImage( this.assetsManager.getAsset(this._spriteDirection + this._spriteIndex), loc.left, loc.top );
	},

	/*
	* Starts player movement
	*/
	p.move = function( direction ) {
		var x = 0,
			y = 0;

		// this.canInput = false;

		switch(direction) {
			case 'up':
				this._spriteDirection = 'n';
				y = 5;
				break;
			case 'down':
				this._spriteDirection = 's';
				x = -5;
				break;
			case 'left':
				this._spriteDirection = 'w';
				x = 5;
				break;
			case 'right':
				this._spriteDirection = 'e';
				y = -5;
				break;
			default:
				break;
		}

		this.viewport.playerOffsetX = x;
		this.viewport.playerOffsetY = y;

		setTimeout( $.proxy(this.animate, this), 100 );
		setTimeout( $.proxy(this.reset, this), 200 );

		this.draw();
		this.drawMap();
	}

	/*
	* Makes player animation
	*/
	p.animate = function() {
		var x = 0,
			y = 0;

		switch(this._spriteDirection) {
			case 'n':
				y = 11;
				break;
			case 'e':
				x = -11;
				break;
			case 's':
				y = -11;
				break;
			case 'w':
				x = 11;
				break;
			default:
				break;
		}

		this._spriteIndex = (this._leftLeg) ? 1 : 2;

		this._leftLeg = !this._leftLeg;

		this.viewport.playerOffsetX = x;
		this.viewport.playerOffsetY = y;

		this.draw();
		this.drawMap();
	}

	/*
	* Reset animation of the player
	*/
	p.reset = function() {
		var x = this.viewport.x,
			y = this.viewport.y;

		switch(this._spriteDirection) {
			case 'n':
				y--;
				break;
			case 'e':
				x++;
				break;
			case 's':
				y++;
				break;
			case 'w':
				x--;
				break;
			default:
				break;
		}

		// Do the 'real' movement
		this.viewport.x = x;
		this.viewport.y = y;

		// Reset keyboar block
		GameStage.canInput = true;

		// Reset pixel offsets
		this.viewport.playerOffsetX = 0;
		this.viewport.playerOffsetY = 0;

		this._spriteIndex = 0;

		this.draw();
		this.drawMap();
	}

	/*
	* Calculate the location of the player in the map
	*/
	p._calculateLocation = function() {
		var character = {
			width: this.assetsManager.getAsset('n0').width,
			height: this.assetsManager.getAsset('n0').height
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