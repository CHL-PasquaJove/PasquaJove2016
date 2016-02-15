// index.js
/*
	Module webPasquaJove.responsable-page
*/
'use strict';

var angular = require('angular');

module.exports = angular.module('webPasquaJove.responsable-page', [

	require('angular-route')
])

.config(require('./ResponsablePageRoute.config'))

.name;