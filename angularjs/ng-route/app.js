var app=angular.module('myApp', ['ngRoute']);


app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'home.html',
			controller: 'MainController'

		})
		

		.when('/about', {
			templateUrl: 'about.html',
			controller: 'AboutController'

		})

		.when('/contact', {
			templateUrl: 'contact.html',
			controller: 'ContactController'

		});
});

app.controller('MainController', function($scope){

	$scope.message='I am in the homepage!';
});

app.controller('AboutController', function($scope){

	$scope.message='I am in the about page!';
});

app.controller('ContactController', function($scope){

	$scope.message='I am in the contact page!';
});