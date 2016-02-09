'use strict';

var angular = require('angular');

module.exports = angular.module('webPasquaJove', [

	require('./main-page'),
	require('./responsables'),

	require('angular-route'),
	require('angular-translate'),
	require('angular-translate-loader-static-files')
])
.config(configFunction)
.name;

configFunction.$inject = ['$routeProvider', '$translateProvider'];

function configFunction($routeProvider, $translateProvider) {
	
	$translateProvider.useStaticFilesLoader({
		prefix: './i18n/language_',
		suffix: '.json'
	});
	$translateProvider.preferredLanguage('es');
	$translateProvider.useSanitizeValueStrategy();

	$routeProvider
		.otherwise({
			redirectTo: '/',
		});
}