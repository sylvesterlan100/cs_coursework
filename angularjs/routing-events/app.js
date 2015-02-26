var app=angular.module('myApp', ['ngRoute']);


app.config(function($routeProvider){
	$routeProvider
		.when('/', {templateUrl: "view.html"})
		.when('/new', 
		{
			templateUrl: 'view2.html',
			controller: 'NewController',
			resolve: {
				app: function($q, $timeout){
					var defer=$q.defer();
					$timeout(function(){
						defer.resolve();
					}, 2000);
					return defer.promise;
				}
			}
		})
});

app.controller('MainController', function($scope, $rootScope, $route, $location){
	$scope.somedata = "this is some data!";
	$scope.navigate=function(){
		console.log($scope);
		$location.path('/new');
	}

	$rootScope.$on("$routeChangeStart", function(event, current, previous, rejection){
		console.log("Route Change start!");
		console.log(event, current, previous, rejection);
	})
	$rootScope.$on("$routeChangeSuccess", function(event, current, previous, rejection){
		console.log("Route Change start!");
		console.log(event, current, previous, rejection);
	})

})

app.controller('OldController', function($scope, $route, $location){

});
app.controller('NewController', function($scope, $template){

})

