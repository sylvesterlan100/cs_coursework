var app= angular.module('myApp', []);

app.directive('clickable', function(){
	return {
		restrict: 'E',
		scope: {foo: '='},
		template: '<button>{{foo}}</button>',
		link: function(scope, element, attrs){
			element.bind('click', function(){
				scope.foo++;
			})
		}
	}
});

app.controller('MainController', function($scope){
	$scope.foo=0;
	$scope.val="";

	$scope.update=function(){
		$scope.val="garbage123";
	};
});