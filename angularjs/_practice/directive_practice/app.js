var app=angular.module('myApp', []);
app.controller('MainController', function(){

})

app.directive('test', function(){
	return {
		restrict: 'E',
		template: '<div>Check me out! <p>{{msg}}</p></div>',
		replace: true,
		scope: {
			msg: '@'
		}
	}
})