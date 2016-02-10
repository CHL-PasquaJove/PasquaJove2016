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
		var url = 'http://www.pascuajoven.com/api/' + 'newUser';
		return $http.post(url, loginParams);
    }

    function getUsers() {
		var url = 'http://www.pascuajoven.com/api/' + 'getUsers';
		console.log(url);
		return [{
			name: 'name',
			surname: 'surname',
			birthday: '10/01/2001',
			mail: 'mail@test.com',
			phone: '12345678',
			movement: 'Movemeeeent',
			invited: 'my sister',
			problems: 'Nope'
		},{
			name: 'name',
			surname: 'surname',
			birthday: '10/01/2001',
			mail: 'mail@test.com',
			phone: '12345678',
			movement: 'Movemeeeent',
			invited: 'my sister',
			problems: 'Nope'
		}, {
			name: 'name',
			surname: 'surname',
			birthday: '10/01/2001',
			mail: 'mail@test.com',
			phone: '12345678',
			movement: 'Movemeeeent',
			invited: 'my sister',
			problems: 'Nope'
		}, {
			name: 'name',
			surname: 'surname',
			birthday: '10/01/2001',
			mail: 'mail@test.com',
			phone: '12345678',
			movement: 'Movemeeeent',
			invited: 'my sister',
			problems: 'Nope'
		}, {
			name: 'name',
			surname: 'surname',
			birthday: '10/01/2001',
			mail: 'mail@test.com',
			phone: '12345678',
			movement: 'Movemeeeent',
			invited: 'my sister',
			problems: 'Nope'
		}];
		//return $http.post(url);
    }

    function getContacts() {
    	var url = 'http://www.pascuajoven.com/api/' + 'getContacts';
		console.log(url);
		return [{
			name: 'a name',
			mail: 'a mail',
			comment: 'this is a comment'
		}, {
			name: 'a name',
			mail: 'a mail',
			comment: 'this is a comment'
		}, {
			name: 'a name',
			mail: 'a mail',
			comment: 'this is a comment'
		}, {
			name: 'a name',
			mail: 'a mail',
			comment: 'this is a comment'
		}, {
			name: 'a name',
			mail: 'a mail',
			comment: 'this is a comment'
		}];
		//return $http.post(url);
    }
}
