var app=angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('home', {
			url: '',
			views:{
				"viewA": {templateUrl:'templates/test1.html'},
				"viewB": {templateUrl: 'templates/home.html'}
			}
		})
		.state('home.testone', {
			url:'/testone',
			templateUrl: 'templates/test2.html'
		})
		.state('home.testtwo', {
			url:'/testtwo',
			templateUrl: 'templates/test3.html'
		})

		.state('other', {
			url: '/state',
			views:{
				"viewA": {templateUrl:'templates/home.html'},
				"viewB": {templateUrl: 'templates/test3.html'}
			}
		
		})


});
app.controller('MainController', function(){

})

