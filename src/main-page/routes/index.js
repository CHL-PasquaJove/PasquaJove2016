// index.js
/*
	Module webPasquaJove.main-page
*/
'use strict';

var angular = require('angular');

module.exports = angular.module('webPasquaJove.main-page', [

	require('angular-route'),
])

.config(require('./MainPageRoute.config'))

.name;