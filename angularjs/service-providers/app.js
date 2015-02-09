var app=angular.module('myApp', []);

app.controller('MainController', function($scope, myTest){
	alert(myTest.getData());
});

app.provider('myTest', function(){
	
	//Private variables like a factory
	var myString='This is data';
	var addToString=function(newstr){
		myString+=newstr;
	}

	return{
		//Providers provide an additional configuration step
		setData: function(data){
			myString=data;
		},
		//Injected coded
		$get: function(){
			return{
				getData: function(){
					return 'String has: '+myString;
				},
				addData: addToString
			}
		}
	}

});

app.config(function(myTestProvider){
	myTestProvider.setData('some different string');
});