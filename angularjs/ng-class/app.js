var app=angular.module('app', []);

app.controller('MainController', function($scope){
	$scope.myVar='orange'

	$scope.myTest=Math.random()>.5 ? true : false;
	$scope.myTest2 = Math.random()>.8 ? true : false;

})