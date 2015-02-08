var app=angular.module('app', []);

app.controller('MainController', function($scope){

	$scope.myarr=[1,2,3,4,5,5]

	$scope.users=[{name: 'Sylvester', age: 25}, {name: 'Andrew', age: 19}, {name: 'David', age: 25}]
	
})