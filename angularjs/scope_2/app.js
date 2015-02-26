var app= angular.module('myApp', []);

app.controller('MainController', function($scope){
	$scope.$on('myEvent', function(event, src){console.log('Main Sees my Event from', src)})
	$scope.broadClick=function(origin){$scope.$broadcast('myEvent', origin)}
	$scope.emitClick=function(origin){$scope.$emit('myEvent', origin)}
})


app.controller('MiddleController', function($scope){
	$scope.$on('myEvent', function(event, src){console.log('Middle Sees my Event from', src)})
	$scope.broadClick=function(origin){$scope.$broadcast('myEvent', origin)}
	$scope.emitClick=function(origin){$scope.$emit('myEvent', origin)}
})


app.controller('BottomController', function($scope){
	$scope.$on('myEvent', function(event, src){console.log('Bottom Sees my Event from', src)})
	$scope.broadClick=function(origin){$scope.$broadcast('myEvent', origin)}
	$scope.emitClick=function(origin){$scope.$emit('myEvent', origin)}
})


