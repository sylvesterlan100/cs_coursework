var app=angular.module('myApp', ['ngRoute']);


var ctrl = app.controller('MainController', function($scope){

	$scope.somedata = 'This is some Data!';
})

//A promise the controller makes
ctrl.data2=function($q, $timeout){

	//defer is a function which may not be completed
	var defer=$q.defer();

	//defer will complete in 3 seconds
	$timeout(function(){
		//defer now completes
		defer.resolve();
		console.log('also finished');
	}, 3000);
	return defer.promise;
}

app.config(function($routeProvider){
	$routeProvider

		//This set up prevents the page from displaying until 3 seconds later
		.when('/',
		{
			templateUrl: 'view.html',
			resolve: {
				//everything in here must be resolved before the template loads

				data1: function($q, $timeout){
					var defer=$q.defer();
					$timeout(function(){
						defer.resolve();
						console.log('finished');
					}, 1000);
					return defer.promise;
				},

				data2: ctrl.data2

			}
		})
		.otherwise({template: "Couldn't find a route."})
})
