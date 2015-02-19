var app=angular.module('myApp', []);

app.controller('MainController', function(){




})

app.directive('check', function(){
	return {
		restrict: 'EM',
		templateUrl: 'check.html',
		replace: true,
		link: function(scope, element, attrs){
			attrs.$observe('msg', function(value){
				element.find('span').text(value);
			
			});
			attrs.$observe('msg', function(value){
				element.find('span').attr('style', 'color:'+value);

			});
			},
		scope: {
			color: '@'
		}
	}
});

		

	