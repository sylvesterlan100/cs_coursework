var app = angular.module('app',['controllers']);

app.controller('MainController', function($scope){
	$scope.val = 'test123';
	$scope.func=function(){
		return 'abc'+'def';
	}
});

app.controller('SecondController', function($scope){
	$scope.val = 'Its working';

});

var TestController=function($scope){
	$scope.val='yes';
}

angular.module('controllers', []).controller('ThirdController', function($scope){
	$scope.val = 'test789';
});