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

	vm.credentials = {};

	vm.login = login;

	activate();
	////////////

	function activate() {
		vm.users = responsablesService.getUsers();
	}

	function login() {
		console.log(vm.credentials);
	}
}
