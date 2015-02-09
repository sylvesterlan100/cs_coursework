var app=angular.module('myApp', []);

app.controller('MainController', function($scope, myFactory){
	myFactory.setData('Check me out');
	myFactory.reverse();
	alert(myFactory.getData());
});

app.factory('myFactory', function(){
	var myString = 'Some other data.';
	var addToString=function(newstr){
		myString+=newstr;
	}
	return{
		getData: function(){
			return myString;
		},
		setData: function(data){
			myString=data
		},
		addData: addToString
	}
});

//$provide what angular use to create services
app.config(function($provide){
	//$delegate: inital instance to service (no access to privates)
	$provide.decorator('myFactory', function($delegate){
		$delegate.reverse = function(){
			$delegate.setData($delegate.getData().split('').reverse().join(''));
		}
		return $delegate;
	})
})

