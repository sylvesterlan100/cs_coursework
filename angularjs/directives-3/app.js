var app=angular.module('myApp', []);

app.controller("MainController", function($scope){


})

app.directive('check', function(){
	return {
		restrict: 'E',
		templateUrl: 'test.html',
		replace: true,
		link: function(scope, element, attrs){
			attrs.$observe('first', function(value){
				element.find('span').text(value)

			})
		},
		scope: {
			msg: '@',
			other: '@'
		}

	}

})