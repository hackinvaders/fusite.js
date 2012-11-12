(function(window, undefined) {

	function Fusite() {

	}

	Fusite.SCREEN_WIDTH = 160;

	Fusite.SCREEN_HEIGHT = 160;

	var gs = null;

	Fusite.start = function( options ) {
		Fusite.SCREEN_WIDTH = options.screenWidth;
		Fusite.SCREEN_HEIGHT = options.screenHeight;
		Fusite.SPRITE_SIZE = (options.spriteSize) ? options.spriteSize : 16;

	    gs = new GameStage( window.document.getElementById('canvas') );
	    gs.stage.width( Fusite.SCREEN_WIDTH );
	    gs.stage.height( Fusite.SCREEN_HEIGHT );
	    gs.start( options.map, options.tiles );
	}

	/*
	*	Add player to the game
	*
	*	@params object {
	*		name: ''
	*		sprites: []
	*	}
	*/
	Fusite.player = function(options) {
		if (!gs) return;

		gs.addPlayer(options);
	}

window.Fusite = Fusite;
})(window)