var Fusite = function() {

	var gs,
		SCREEN_WIDTH,
		SCREEN_HEIGHT;

	/*
	* The fun begins
	*/
	function start(options) {
		gs = new GameStage( window.document.getElementById('canvas') );

		SCREEN_WIDTH = options.screenWidth;
		SCREEN_HEIGHT = options.screenHeight;
		SPRITE_SIZE = (options.spriteSize) ? options.spriteSize : 16;

	    gs.width(SCREEN_WIDTH);
	    gs.height(SCREEN_HEIGHT);
	    gs.start(options.map, options.tiles);
	}

	/*
	*	Add player to the game
	*
	*	@params object {
	*		name: ''
	*		sprites: []
	*	}
	*/
	function player(options) {
		gs.addPlayer(options);
	}

	return {
		start: start,
		player: player,
		SCREEN_WIDTH: SCREEN_WIDTH,
		SCREEN_HEIGHT: SCREEN_HEIGHT
	}

}();