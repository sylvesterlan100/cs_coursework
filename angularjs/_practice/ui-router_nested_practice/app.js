var app=angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/testthree');

	$stateProvider
		.state('home', {
			url: '/home',
			templateUrl: 'templates/home.html'
		})
		.state('testone', {
			url: '/testone',
			templateUrl: 'templates/test1.html'
		})
		.state('testone.testtwo', {
			url: '/testtwo',
			templateUrl: 'templates/test2.html'
		})
		.state('testone.testthree', {
			url: '/testthree',
			templateUrl: 'templates/test3.html'
		})



});
app.controller('MainController', function(){

})

