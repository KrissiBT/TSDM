// game

define([
	'jquery',
	'underscore'
], function($, _){
	var initialize = function(){

		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext('2d');

		// canvas height/width properties changed on resize
        window.onresize = function(){
            canvas.height = canvas.offsetHeight;
            canvas.width = canvas.offsetWidth;
        };
	};

	return {
		initialize: initialize
	};
});
