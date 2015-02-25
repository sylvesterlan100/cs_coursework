var app=angular.module('myApp', []);

app.controller('MainController', function($scope, $q, $interval, $timeout){

	$scope.mydata="resolve";
	$scope.mydata1="reject";
	$scope.mydata2="notify";

	var defer= $q.defer();

	defer.promise
		.then(function(val){$scope.mydata=val}, function(error){$scope.mydata1=error}, function(note){$scope.mydata2=note})
		

	function timer(){
		setTimeout(function(){return "done"}, 3000);
	}

	$timeout(function(){
		defer.resolve("got "+timer());
	}, 1000);

	

})