var app=angular.module('myApp', []);

app.controller('MainController', function($scope){


	var myButton = document.getElementById('test');
	var arr=[1, 2, 3, 4];

	var i = 0;

	$scope.arr=arr;

	
	myButton.addEventListener('click', function(){
		
		$scope.$apply(function(){
		i++;
		arr.push(i);
		
	})
	


})