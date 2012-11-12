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
    	tiles: tiles,
    	screenWidth: 144,
    	screenHeight: 144
    });

    Fusite.player({

    	name: 'frago',

    	sprites: [
    		{name: 'n0', path:'imgs/scientist_n0.png'},
    		{name: 'n1', path:'imgs/scientist_n1.png'},
    		{name: 'n2', path:'imgs/scientist_n2.png'},
    		
    		{name: 'e0', path:'imgs/scientist_e0.png'},
    		{name: 'e1', path:'imgs/scientist_e1.png'},
    		{name: 'e2', path:'imgs/scientist_e2.png'},
    		
    		{name: 's0', path:'imgs/scientist_s0.png'},
    		{name: 's1', path:'imgs/scientist_s1.png'},
    		{name: 's2', path:'imgs/scientist_s2.png'},
    		
    		{name: 'w0', path:'imgs/scientist_w0.png'},
    		{name: 'w1', path:'imgs/scientist_w1.png'},
    		{name: 'w2', path:'imgs/scientist_w2.png'},
    	]

    });
    
    // Draw another map
    // Fusite.drawMap('TownMap');

})(window);