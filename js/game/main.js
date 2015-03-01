// main

// Config
require.config({
    baseUrl: 'js/game',
    paths: {
    	// set the paths for different shit here so its easier to require
        jquery: '../vendor/jquery-1.11.2.min',
        underscore: '../vendor/underscore-min' // Helps a lot with speed and readability in a lot of cases
    }
});

// Require and initialize the game
require(['game'], function(Game){
	Game.initialize();
});
