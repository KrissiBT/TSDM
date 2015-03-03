// modules/assets

// Handles downloading of assets and includes a callback when all assets are loaded
// Todo later, loading bar

define([
	'jquery',
	'underscore'
], function($, _){
	
	/**************
		Private
	**************/

	var downloadQueue = [];
	var downloadCache = {};

	var successCount = 0;
	var errorCount = 0;

	// Check if downloads are done
	function isDone(){
		if (successCount + errorCount === downloadQueue.length) {
			return true;
		}
		else{
			return false;
		};
	}

	/*************
		Public
	*************/

	var assetsApi = {};
	
	// Loop through downloadQueue and download to downloadCache
	assetsApi.preload = function(pathArray, callback){
		// User defined paths
		downloadQueue = pathArray;

		// Loop and download
		_.each(downloadQueue, function(path){

			var img = new Image();
			var self = this;

			img.addEventListener('load', function(){
				downloadCache[path] = img;
				successCount += 1;

				if(isDone()){
					callback(downloadCache);
				}
			}, false);
			img.addEventListener('error', function(){
				errorCount += 1;

				if(isDone()){
					callback(downloadCache);
				}
			}, false);

			img.src = path;

		});

		if (isDone()) {
			// Callback with cache as parameter when download is finished
			callback(downloadCache);
		};
	}

	return assetsApi;

});
