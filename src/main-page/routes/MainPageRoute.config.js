// MainPageRoute.config.js
/*
	MainPageRoute

*/
'use strict';

module.exports = MainPageRouteConfig;

/* @ngInject */
function MainPageRouteConfig($routeProvider) {
	$routeProvider.when('/', {
		template: require('./MainPageRoute.tpl.html'),
		controller: MainPageController,
		controllerAs: 'vm'
	});
}

/* @ngInject */
function MainPageController($translate, mainService) {
	var vm = this;

	vm.showContact = false;
	vm.showInscription = false;
	vm.additionalInfo = false;

	vm.newInscription = {};
	vm.contactForm = {};

	vm.contactUs = contactUs;
	vm.signUp = signUp;
	vm.clickInfo = clickInfo;
	vm.submitNewUserForm = submitNewUserForm;
	vm.submitContactForm = submitContactForm;
	vm.changeLanguage = changeLanguage;

	////////////////

	function contactUs() {
		vm.showContact = !vm.showContact;
		vm.showInscription = false;
	}

	function signUp() {
		vm.showContact = false;
		vm.showInscription = !vm.showInscription;
	}

	function clickInfo() {
		vm.additionalInfo = !vm.additionalInfo;
	}

	function submitNewUserForm() {
		console.log('user', vm.newInscription);
		mainService.registerNewUser(vm.newInscription);
	}

	function submitContactForm() {
		console.log('contact', vm.contactForm);
		mainService.sendMessage(vm.contactForm);
	}

	function changeLanguage(lang) {
		$translate.use(lang);
	}
}
