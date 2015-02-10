var app = angular.module('myApp', ['firebase']);

app.controller('MainController', ['$scope', '$firebase', function($scope, $firebase){
	var ref = new Firebase('https://sylvesterpoke.firebaseio.com/')
	var sync = $firebase(ref);
	$scope.data = sync.$asObject();

	var syncObject = sync.$asObject();
	syncObject.$bindTo($scope, 'data');

}]);