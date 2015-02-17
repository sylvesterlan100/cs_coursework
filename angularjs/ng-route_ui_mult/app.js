var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider){
	$stateProvider
		
		.state('home', {
			url: '',
			views: {
				'viewA':{template: 'hi'},
				'viewB':{template: 'there'}
			}
		})
		.state('alpha', {
			url: '/alpha',
			views: {
				'viewA': {templateUrl: 'templates/c.html'},
				'viewB': {templateUrl: 'templates/d.html'}
			}
		})
		.state('letter', {
			url: '/letter',
			views: {
				'viewA': {templateUrl: 'templates/a.html'},
				'viewB': {templateUrl: 'templates/b.html'}
			}
		})
});


app.controller('MainController', function(){


});

