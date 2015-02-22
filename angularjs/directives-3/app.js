var app=angular.module('myApp', []);

app.controller("MainController", function($scope){


})

app.directive('check', function(){
	return {

		//What time of directive
		restrict: 'E',

		//Location of the template which is either inserted between or replaces the directive element
		templateUrl: 'test.html',
		replace: true,
		scope: {
			msg: '@'
			
		},
		link: function(scope, element, attrs){
			attrs.$observe('first', function(value){
				element.find('span').text(value)

			})
		}
		

	}

})