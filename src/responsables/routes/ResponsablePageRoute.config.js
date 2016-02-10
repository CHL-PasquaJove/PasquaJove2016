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
		vm.users = responsablesService.getUsers();
		vm.contacts = responsablesService.getContacts();
	}

	function login() {
		console.log(vm.credentials);
		if ( vm.credentials.username === 'victor' && vm.credentials.password === 'victor') {
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
}
