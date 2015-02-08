var app=angular.module('myApp', ['FirstControllers', 'SecondControllers']);


var first=angular.module('FirstControllers', []);
first.controller('FirstController', function($scope){
	$scope.arr=['red','blue','orange', 'green', 'gray', 'yellow', 'black'];
	$scope.myVar=Math.random()>.5 ? true : false;
})

var second=angular.module('SecondControllers', []);
second.controller('SecondController', function($scope){
	$scope.myVar=false;
	$scope.test=function(){
		$scope.myVar=$scope.myVar ? false : true;
	}

})

