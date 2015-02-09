var app=angular.module('myApp', []);

app.controller('MainController', function($scope, myFactory){
	alert(myFactory.getdata());
})

app.factory('myFactory', function(){
	var myData = 'Some other data;'
	return{
		getdata: function(){
			return mydata;
		}
	}
})