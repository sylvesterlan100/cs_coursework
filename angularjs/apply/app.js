var app=angular.module('myApp', []);
app.controller('MainController', function($scope, $timeout, $http){
	var counter = 0;

	
	var makeRequest = function(){
		//will activate the digest loop when called
		$http({
			url: 'http://google.com',
			method: 'get'
		}).success(console.log("Get request successful"))
	};
	$timeout(function(){
		makeRequest();
		console.log("End timeout!");
	}, 3000);

	//activates whenever $digest is called
	$scope.$watch(function(){
		counter +=1;
		console.log("Digest has been called",counter, "times:");
	});

	
	
})

//config takes place way before anything else
app.config(function(){
	console.log('config has been reached');
});

