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
		var url = 'http://api.pascuajoven.com/api/' + 'loginUser';
		return $http.post(url, loginParams);
    }

    function getUsers() {
		var url = 'http://api.pascuajoven.com/api/' + 'getUsers';
		return $http.post(url);
    }

    function getContacts() {
    	var url = 'http://api.pascuajoven.com/api/' + 'getContacts';
		return $http.post(url);
    }
}
