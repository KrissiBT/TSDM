// game

define([
	'jquery',
	'underscore'
], function($, _){
	var initialize = function(){

		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');

		// canvas height/width properties changed on resize
        function updatecanvas(){
            canvas.height = canvas.offsetHeight;
            canvas.width = canvas.offsetWidth;
        }
        window.onresize = function(){
        	updatecanvas();
        };
        updatecanvas();

        // Test text plz ignore or remove
		ctx.font = "40px Tahoma";
		ctx.fillText("Tækniskóli Deathmatch", 100, 100);

	};

	return {
		initialize: initialize
	};
});
