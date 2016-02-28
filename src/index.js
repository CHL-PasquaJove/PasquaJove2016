'use strict';

var angular = require('angular');

module.exports = angular.module('webPasquaJove', [

	require('./main-page'),
	require('./responsables'),

	require('angular-route'),
	require('angular-cookies'),
	require('angular-translate'),
	require('angular-translate-loader-static-files'),
	require('angular-translate-storage-local'),
])
.config(configFunction)
.name;

configFunction.$inject = ['$routeProvider', '$translateProvider'];

function configFunction($routeProvider, $translateProvider) {
	
	var preferredLanguage = 'es';

	if ( window.location.hostname && window.location.hostname === 'www.pascuajoven.com') {
		preferredLanguage = 'es';
	} else if ( window.location.hostname && window.location.hostname === 'www.pasquajove.com' ) {
		preferredLanguage = 'ca';
	} else {
		preferredLanguage = 'es';
	}


	$translateProvider.useStaticFilesLoader({
		prefix: './i18n/language_',
		suffix: '.json'
	});
	$translateProvider.preferredLanguage(preferredLanguage);
	//$translateProvider.useLocalStorage();
	$translateProvider.useSanitizeValueStrategy();

	$routeProvider
		.otherwise({
			redirectTo: '/',
		});
}