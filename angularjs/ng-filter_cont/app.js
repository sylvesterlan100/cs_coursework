 var app = angular.module('myApp', []);

app.controller('MainController', function($scope, $filter){
	$scope.mydata={arr:['jane', 'jake', 'steven', 'hank'], obj:[{name: 'sarah', age: 24}, {name: 'john', age: 35}, {name: 'andy', age: 12}]}
	console.log($filter('uppercase')('make it cap'));
})	