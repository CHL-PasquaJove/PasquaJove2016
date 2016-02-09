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
		getUsers: getUsers,
		getContacts: getContacts
	};

	return service;

	//////

	function login(loginParams) {
		console.log(loginParams);
		var url = 'http://www.pascuajoven.com/api/' + 'newUser';
		return $http.post(url, loginParams);
    }

    function getUsers() {
		var url = 'http://www.pascuajoven.com/api/' + 'getUsers';
		return $http.post(url);
    	//return [];
    }

    function getContacts() {
    	var url = 'http://www.pascuajoven.com/api/' + 'getContacts';
		return $http.post(url);
    }
}
