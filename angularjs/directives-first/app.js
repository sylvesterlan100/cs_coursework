var app=angular.module('myApp', []);

app.controller('MainController', function(){



})

app.directive('photo', function(){
	return {
		restrict: 'E',    //A(ttribute), E(lement), C(lass), M(comment)
		templateUrl: 'photo.html' 
 	}



})