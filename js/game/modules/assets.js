// modules/assets

// Handles downloading of assets and includes a callback when all assets are loaded

/*
	How i want to call the asset manager

	Assets.preload([array of assets], function(){
		// callback
	})
*/

define([
	'jquery',
	'underscore'
], function($, _){
	
	/**************
		Private
	**************/

	var downloadQueue = [];

	function downloadFromPath(){

	}

	function downloadAll(){

	}

	/*************
		Public
	*************/

	var assetsApi = {};

	assetsApi.preload = function(pathArray, callback){
		
	}

	return assetsApi;

});
