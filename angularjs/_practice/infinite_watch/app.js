var app=angular.module('myApp', []);

app.controller('MainController', function($scope){
	var test=false;
	$scope.test1=0;
	$scope.act=function(){
		test=true;
		$scope.test1=1;
	}

	//Every time one updates, the other will update
	//Creates an infinite loop if not stopped by the program

	$scope.$watch('test1', function(){
		if(test)
			$scope.test2=$scope.test1+1;
	});
	$scope.$watch('test2', function(){
		if(test)
			$scope.test1=$scope.test2+1;
	});

	//ends at 22, 23
});