var app =  angular.module('myApp', []);
app.controller('MainController', function($scope){
	$scope.myVar='Hello world'
	app.controller('SecondController', function($scope){
		$scope.myVar2='Bye World'
	});

	$scope.awesome=app;
});

