var app = angular.module('app',['controllers']);

angular.module('controllers', []).controller('MainController', function($scope){
	$scope.val = 1;
	$scope.even=false;
	$scope.inc=function(){
		$scope.val++;
		$scope.even=$scope.val%2==0;
	}
	
});