// TopDown, 2d top down rendering engine
// Created by Hermann Björgvin Haraldsson

/*
	TopDown works with maps that are tiled and view top down,
	TopDown does not yet work well with creating games that
	have assets that overlap other tiles (work in progress)

	Top down takes in a two dimensional array as a map
	and an assets object containing either image objects
	or hex color codes (example #FFF or #0f0130)

	Additionally you can specify a rotation to each tile
*/

define([
	'jquery',
	'underscore'
], function($, _){

	/**************
		Private
	**************/

	/*************
		Public
	*************/

	var renderingApi = {};

	return renderingApi;

});
