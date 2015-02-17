angular.module('myApp', ['ui.router'])

.config(function($stateProvider, $urlRouterProvider){
	
	$stateProvider
		.state('setting', {
			url: "/setting",
			templateUrl: "setting.html"
		})
		.state("setting.profile",{
			url: "/profile",
			templateUrl: "profile.html"
		})
		.state("setting.account", {
			url: "/account",
			templateUrl: "account.html"
		})
		.state('breakfast', {
			url: '/breakfast',
			templateUrl: 'breakfast.html'
		})
	$urlRouterProvider.otherwise("/setting/profile");
})

	

