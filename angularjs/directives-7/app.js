var app=angular.module('myApp', []);

app.controller('MainController', function(){


})

app.directive('check', function(){

	return {
		restrict: 'E',
		transclude: true,
		template: '<div ng-transclude></div><div> Awesome sauce </div> '
	}

})