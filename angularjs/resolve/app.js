var app=angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/',
		{
			templateUrl: 'view.html',
			resolve: {
				data1: function($q, $timeout){
					var defer=$q.defer();
					$timeout(function(){
						defer.resolve();
						console.log('finished');
					}, 2000);
					return defer.promise;
				}

			}
		})
		.otherwise({template: "Couldn't find a route."})
})

app.controller('MainController', function($scope){

	$scope.somedata = 'This is some Data!';
})