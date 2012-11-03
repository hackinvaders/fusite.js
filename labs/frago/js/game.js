(function(window, undefined) {

	var testMap =
   [
      ['r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r'],
      ['r', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'r'],
      ['r', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'r'],
      ['r', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'r'],
      ['r', 'g', 'g', 'g', 'g', 'g', 'g', 'r', 'g', 'g', 'g', 'r'],
      ['r', 'g', 'g', 'g', 'g', 'g', 'g', 'r', 'r', 'g', 'g', 'r'],
      ['r', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'r', 'g', 'g', 'r'],
      ['r', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'r', 'g', 'g', 'r'],
      ['r', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'r', 'g', 'g', 'r'],
      ['r', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'r'],
      ['r', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'r'],
      ['r', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'r'],
      ['r', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'g', 'r'],
      ['r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r', 'r']
   ];

   var tiles = [
   		{name:'tileBlack', path:'imgs/tile_black.png'},
   		{name:'tileGrass', path:'imgs/tile_grass.png'},
   		{name:'tileRock', path:'imgs/tile_rock.png'}
   ];

    Fusite.start({
    	map: testMap,
    	tiles: tiles
    });
    
    // Draw another map
    //Fusite.drawMap('TownMap'); 

})(window);