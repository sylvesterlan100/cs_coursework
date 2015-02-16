var app=angular.module('myApp', []);

app.controller('MainController', function($scope){

	$scope.msgBox='Haha';
})

app.directive('check', function(){

	return {
		restrict: 'EA',
		//template: '<div>Test</div>'
		templateUrl: 'tester.html',
		scope: {
			msg: '@msgTest'
		}
	}

})