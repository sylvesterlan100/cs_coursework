var app= angular.module('myApp', []);

app.controller("MainController", function(){

});

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
})