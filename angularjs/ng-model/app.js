var app=angular.module('myApp', []);

app.controller('MainController', function($scope){
	$scope.mydata={val:'test'}

	$scope.hisdata={val:$scope.mydata.val}
	$scope.$watch('mydata.val', function(newVal, oldVal){
		if(newVal!=oldVal)
			$scope.check1=$scope.mydata.val+' LOL'
	})

});

app.controller('SecondController', function($scope){
	$scope.num=0;
	$scope.nums=[];
	$scope.increment=function(){
		$scope.num++;
	}
	$scope.breakit = $scope.$watch('num', function(){
		$scope.nums.push($scope.num)
	})
});