var app=angular.module('myApp', []);

app.controller('MainController', function($scope){

	$scope.xox=' too much'
	$scope.call=function(msg, mess){ 
		console.log('you gave me '+msg+mess);
	}
});

app.directive('check', function(){
	return{

		restrict: 'EACM',
		templateUrl: 'check.html',
		replace: true,
		scope:{
			msg: '@rofl',
			msgA: '=lol',
			func: '&'

		},
		controller: function($scope){
			$scope.wow='lolmypants';
			$scope.zoz=' spaced'
			
		}
	}
})