var Fusite = function() {

	var gs;

	function start(options) {
		gs = new GameStage( window.document.getElementById('canvas') );
	    gs.width(160);
	    gs.height(160);
	    gs.start(options.map, options.tiles);
	}

	function drawMap(map) {
		gs.drawMap(map);
	}

	function setTiles() {

	}

	function addPlayers() {

	}

	function addPlayer() {

	}

	return {
		start: start,
		drawMap: drawMap,
		setTiles: setTiles,
		addPlayer: addPlayer,
		addPlayers: addPlayers
	}

}();