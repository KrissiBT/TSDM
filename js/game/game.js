// game

define([
	'jquery',
	'underscore',
	'modules/assets',
	'modules/canvasHandler'
], function($, _, moduleAssetsManager, moduleCanvasHandler){
	var initialize = function(){

		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');

		// Canvas handler, takes care of resizing and what knot
		var canvasHandler = moduleCanvasHandler;
		canvasHandler.configure(canvas);
		canvasHandler.autoResize();

        // Test text plz ignore or remove
		ctx.font = "40px Tahoma";
		ctx.fillText("Test", 100, 100);

		// Assets cache from preloader
		var assetsManager = moduleAssetsManager;

		assetsManager.preload([
			'js/game/assets/professor_walk_cycle.png',
			'js/game/assets/themomonstersprites018.png'
		], function(cache){
			console.log('Assets loaded');
			assetsLoaded(cache);
		});

		function assetsLoaded(assets){
			var charImg = assets['js/game/assets/professor_walk_cycle.png'];
			ctx.drawImage(charImg, 100, 200);

			var charImgA = assets['js/game/assets/themomonstersprites018.png'];
			ctx.drawImage(charImgA, 700, 200);
		}

	};

	return {
		initialize: initialize
	};
});
