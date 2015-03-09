var app=angular.module('myApp', []);

app.controller('MainController', function($scope, myService){

	alert(myService.getData());

});

// app.service('myService', function(){
// 	var myString = 'This is Data';
// 	var addToString = function(newstr){
// 		myString+=newstr;
// 	};
// 	this.getData= function(){
// 		return 'String contains: '+myString;
// 	}
// 	this.addData= addToString;
// })
// app.factory('myService', function(){
// 	return new ServiceClass();
// })

app.service('myService', ServiceClass)

function ServiceClass(){
	var myString = 'This is Data';
	var addToString = function(newstr){
		myString+=newstr;
	};
	this.getData= function(){
		return 'String contains: '+myString;
	}
	this.addData= addToString;
}