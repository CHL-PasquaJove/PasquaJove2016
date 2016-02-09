// ResponsablesService.factory.js
/*
	ResponsablesService:
	
*/
'use strict';

module.exports = ResponsablesServiceFactory;

/* @ngInject */
function ResponsablesServiceFactory($http) {
	var service = {
		login: login,
		getUsers: getUsers
	};

	return service;

	//////

	function login() {
		console.log($http);
    }

    function getUsers() {
    	return [];
    }
}
