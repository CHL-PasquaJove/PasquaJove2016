// MainService.factory.js
/*
	MainService:
	
*/
'use strict';

module.exports = MainServiceFactory;

/* @ngInject */
function MainServiceFactory($http) {
	var service = {
		registerNewUser: registerNewUser,
		sendMessage: sendMessage
	};


	return service;

	//////

	function registerNewUser(userParams) {
		var url = 'http://api.pascuajoven.com/api/' + 'newUser';
		var req = {
			method: 'POST',
			url: url,
			headers: {
				'Content-Type': 'application/json'
			},
			data: userParams
		};
		
		return $http(req);
		//return $http.post(url, userParams);
    }

    function sendMessage(messageParams) {
    	var url = 'http://api.pascuajoven.com/api/' + 'newContact';
    	var req = {
			method: 'POST',
			url: url,
			headers: {
				'Content-Type': 'application/json'
			},
			data: messageParams
		};
		
		return $http(req);
		//return $http.post(url, messageParams);
    }
}