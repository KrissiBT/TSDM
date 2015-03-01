// game

define([
	'jquery',
	'underscore'
], function($, _){
	var initialize = function(){

		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');

		// Resize canvas and stuff
        function reconfigureCanvas(){
            canvas.height = canvas.offsetHeight;
            canvas.width = canvas.offsetWidth;
        }
        window.onresize = function(){
        	reconfigureCanvas();
        };
        reconfigureCanvas();

        // Test text plz ignore or remove
		ctx.font = "40px Tahoma";
		ctx.fillText("Test", 100, 100);

	};

	return {
		initialize: initialize
	};
});
