// canvas handler for resizing and other handy events

define([
	'jquery',
	'underscore'
], function($, _){
	
	/**************
		Private
	**************/

	var canvas = undefined;
    
    function resizeHandler(){
        canvas.height = canvas.offsetHeight;
        canvas.width = canvas.offsetWidth;
    }

	/*************
		Public
	*************/

	var publicApi = {};

	publicApi.configure = function(p_canvas){
		canvas = p_canvas;
	}

	publicApi.autoResize = function(){
	    window.onresize = function(){
	    	resizeHandler();
	    };
	    resizeHandler();
	}

	return publicApi;

});
