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

	function registerNewUser() {
		console.log($http);
    }

    function sendMessage() {

    }
}