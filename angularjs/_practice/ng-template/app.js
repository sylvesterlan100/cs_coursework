
//inserting different modules into myApp, giving it access to the controllers and functionality defined in them
var app=angular.module('myApp', ['FirstControllers', 'SecondControllers']);


//module with a controller defined
var first=angular.module('FirstControllers', []);

//controller which set up a view that repeats a word with different colors
first.controller('FirstController', function($scope){
	$scope.arr=['red','blue','orange', 'green', 'gray', 'yellow', 'black'];
	
})

//another module with a controller defined
var second=angular.module('SecondControllers', []);

//controller which alternate text in the main view
second.controller('SecondController', function($scope){
	
	//boolean designed to show and hide things
	$scope.myVar=false;
	$scope.test=function(){
		$scope.myVar=!($scope.myVar);
	}

})

