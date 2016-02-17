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
		console.log(userParams);
		var url = 'http://api.pascuajoven.com/api/' + 'newUser';
		return $http.post(url, userParams);
    }

    function sendMessage(messageParams) {
    	console.log(messageParams);
		var url = 'http://api.pascuajoven.com/api/' + 'newContact';
		return $http.post(url, messageParams);
    }
}