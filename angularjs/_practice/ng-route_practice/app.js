
//must inject ngRoute into app
var app=angular.module('myApp',['ngRoute']);


app.controller('MainController', function(){

})

app.config(function($routeProvider){
	
//configure which view(which partial html page) is loaded into ng-view; depends on the url
//requires server to work locally
	$routeProvider

		//when the url is .../, insert home.html into view
		.when('/', {
			templateUrl: 'home.html'
			
		})
		.when('/home', {
			templateUrl: 'home.html'
		})
		.when('/about', {
			templateUrl: 'about.html'
		})
		.when('/contact', {
			templateUrl: 'contact.html'
		})

		//otherwise, if no url matches, go to this predefined route
		.otherwise({
			redirectTo: 'about'
		})
})