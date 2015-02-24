var app=angular.module('myApp', []);

//$q helps run asynchronous functions
app.controller("MainController", function($scope, $q, $timeout){
	$scope.mydata='Old Data';
	
	var defer= $q.defer();

	//creates a promise that when fulfilled...
	defer.promise

		//..the 'then' activates
		.then(function(val){
			$scope.mydata=val
		})

	$timeout(function(){
		//the promise fulfilled 3 seconds later
		defer.resolve("New data, baby!");
	}, 3000)
})