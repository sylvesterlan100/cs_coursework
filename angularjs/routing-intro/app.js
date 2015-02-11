var app=angular.module('myApp',['ngRoute']);

app.controller('MainController', function($scope){
	$scope.somedata='This is some data!!!'
});

app.config(function($routeProvider){
	$routeProvider
		.when('/', {templateUrl: 'view.html', controller: 'MainController'});
});