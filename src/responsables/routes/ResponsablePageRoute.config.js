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
function ResponsablePageController() {
	var vm = this;

	console.log(vm);
}
