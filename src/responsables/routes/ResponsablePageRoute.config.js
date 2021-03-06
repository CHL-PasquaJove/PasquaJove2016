// ResponsablePageRoute.config.js
/*
	ResponsablePageRoute

*/
'use strict';

module.exports = ResponsablePageRouteConfig;

/* @ngInject */
function ResponsablePageRouteConfig($routeProvider) {
	$routeProvider.when('/responsables', {
		template: require('./ResponsablePageRoute.tpl.html'),
		controller: ResponsablePageController,
		controllerAs: 'vm'
	});
}

/* @ngInject */
function ResponsablePageController(responsablesService) {
	var vm = this;

	vm.userListActive = true;
	vm.contactListActive = false;
	vm.credentials = {};
	vm.showLogin = true;
	vm.showLists = false;

	vm.login = login;
	vm.showUsersList = showUsersList;
	vm.showContactsList = showContactsList;

	activate();
	////////////

	function activate() {
		if ( window.sessionStorage.getItem('logged') === 'true' ){
			vm.showLogin = false;
			vm.showLists = true;
		}
		responsablesService.getUsers()
			.then(getUsersResponse);
		
		responsablesService.getContacts()
			.then(getContactsResponse);
	}

	function getUsersResponse(response) {
		calculateAge(response.data);
	}

	function getContactsResponse(response) {
		vm.contacts = response.data;
	}

	function login() {
		if ( vm.credentials.username === 'victor' && vm.credentials.password === 'victor') {
			window.sessionStorage.setItem('logged', true);
			vm.showLogin = false;
			vm.showLists = true;
		}
	}

	function showUsersList() {
		vm.userListActive = true;
		vm.contactListActive = false;
	}

	function showContactsList() {
		vm.userListActive = false;
		vm.contactListActive = true;
	}

	function calculateAge(list) {
		var actual, listLength = list.length, refactorDate;
		for ( var i = 0; i < listLength; i++ ) {
			actual = list[i];

			refactorDate = actual.birth.split(/\//);

			actual.age = _calculateAge( new Date([ refactorDate[1], refactorDate[0], refactorDate[2] ].join('/') ) );
		}

		vm.users = list;
	}

	function _calculateAge(birthday) { // birthday is a date
	    var ageDifMs = Date.now() - birthday.getTime();
	    var ageDate = new Date(ageDifMs); // miliseconds from epoch
	    return Math.abs(ageDate.getUTCFullYear() - 1970);
	}
}
