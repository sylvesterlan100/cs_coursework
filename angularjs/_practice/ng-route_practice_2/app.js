
//ngRoute must be injected into the app
var app=angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {templateUrl: 'view.html'})


		//redirects provides more options for routing
		.when('/test', {redirectTo: "/test/none/none"})


		//redirect can take a function
		// routeParams = key value store
		//path = string the router sees
		//search = key value store of query string parameters
		.when('/tester', {redirectTo: function(routeParams, path, search){

			console.log(routeParams, path, search);
			return '/test/none/none'
		}})

		//:myparam and :myparam2 are accessible in controllers has $routeParams
		.when('/test/:myparam/:myparam2', {templateUrl: 'view2.html'})
		.otherwise({template: "Couldn\'t find a route"})
})

app.controller('MainController', function($scope, $routeParams){
	$scope.data=$routeParams.myparam+" "+$routeParams.myparam2
})