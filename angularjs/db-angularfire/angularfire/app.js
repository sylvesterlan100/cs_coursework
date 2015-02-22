//must inject firebase module
var app = angular.module('myApp', ['firebase']);

//inject firebase service
app.controller('MainController', ['$scope', '$firebase', function($scope, $firebase){
	
	//links to existing firebase database
	var ref = new Firebase('https://sylvesterpoke.firebaseio.com/')
	var sync = $firebase(ref);

	//bring firebase data locally in the form of an object
	$scope.data = sync.$asObject();

	//bring firebase data locally in the form of an object whose value is bound to the database
	//changes here update database in real time
	var syncObject = sync.$asObject();
	syncObject.$bindTo($scope, 'data');

}]);