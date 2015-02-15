var app=angular.module('myApp', ['ui.router']);

app.controller('MainController', function(){

	$scope.redirectToAbout = function(){
    $state.go('about'); 
}
	
})

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'home.html',
			controller: 'HomeController'
		})
		.state('about', {
			url:'/about',
			templateUrl: 'about.html',
			controller: 'AboutController'
		})

}])