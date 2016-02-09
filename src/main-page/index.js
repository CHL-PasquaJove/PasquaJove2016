// index.js
/*
	Module webPasquaJove.main
*/
'use strict';

var angular = require('angular');

module.exports = angular.module('webPasquaJove.main', [

	require('./routes'),
	require('./services')
])

.name;