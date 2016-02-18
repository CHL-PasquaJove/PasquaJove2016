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
	vm.language = 'es';
	vm.newUserSuccess = false;
	vm.newUserError = false;
	vm.sendingData = false;

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
		vm.sendingData = true;
		vm.newInscription.food = [];
		if ( vm.newInscription.diabetes ) { 
			vm.newInscription.food.push(vm.newInscription.diabetes); 
		}
		if ( vm.newInscription.celiaq ) { 
			vm.newInscription.food.push(vm.newInscription.celiaq); 
		}
		if ( vm.newInscription.alergia ) {
			vm.newInscription.food.push(vm.newInscription.alergia); 
		}
		if ( vm.newInscription.others ) { 
			vm.newInscription.food.push(vm.newInscription.othersothers); 
		}
		
		mainService.registerNewUser(vm.newInscription)
			.then(function(){
				vm.sendingData = false;
				vm.newUserSuccess = true;
			})
			.catch(function(){
				vm.sendingData = false;
				vm.newUserError = true;
			});
	}

	function submitContactForm() {
		vm.sendingData = true;
		mainService.sendMessage(vm.contactForm)
			.then(function(){
				vm.sendingData = false;
				vm.contactSuccess = false;
			})
			.catch(function(){
				vm.sendingData = false;
				vm.contactError = true;
			});
	}

	function changeLanguage(lang) {
		$translate.use(lang);

		vm.language = lang;
	}
}
