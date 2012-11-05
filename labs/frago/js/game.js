(function(window, undefined) {

	var testMap =
	[
	   [{ground:1, item:2}, {ground:1, item:2}, {ground:1, item:2}, {ground:1, item:2}, {ground:1, item:2}, {ground:1, item:2}, {ground:1, item:2}, {ground:1, item:2}, {ground:1, item:2}, {ground:1, item:2}, {ground:1, item:2}, {ground:1, item:2}],
	   [{ground:1, item:2}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1, item:2}],
	   [{ground:1, item:2}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1, item:2}],
	   [{ground:1, item:2}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1, item:2}],
	   [{ground:1, item:2}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1, item:2}, {ground:1}, {ground:1}, {ground:1}, {ground:1, item:2}],
	   [{ground:1, item:2}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1, item:2}, {ground:1, item:2}, {ground:1}, {ground:1}, {ground:1, item:2}],
	   [{ground:1, item:2}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1, item:2}, {ground:1}, {ground:1}, {ground:1, item:2}],
	   [{ground:1, item:2}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1, item:2}, {ground:1}, {ground:1}, {ground:1, item:2}],
	   [{ground:1, item:2}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1, item:2}, {ground:1}, {ground:1}, {ground:1, item:2}],
	   [{ground:1, item:2}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1, item:2}],
	   [{ground:1, item:2}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1, item:2}],
	   [{ground:1, item:2}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1, item:2}],
	   [{ground:1, item:2}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1}, {ground:1, item:2}],
	   [{ground:1, item:2}, {ground:1, item:2}, {ground:1, item:2}, {ground:1, item:2}, {ground:1, item:2}, {ground:1, item:2}, {ground:1, item:2}, {ground:1, item:2}, {ground:1, item:2}, {ground:1, item:2}, {ground:1, item:2}, {ground:1, item:2}]
	];

    var tiles = [
   		{name:'0', path:'imgs/tile_black.png'},
   		{name:'1', path:'imgs/tile_grass.png'},
   		{name:'2', path:'imgs/tile_rock.png'}
    ];

    Fusite.start({
    	map: testMap,
    	tiles: tiles
    });
    
    // Draw another map
    //Fusite.drawMap('TownMap'); 

})(window);