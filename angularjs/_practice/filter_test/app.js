var app = angular.module('myApp', []);

app.controller('MainController', function($scope){

	$scope.myVar="Test"
	$scope.myArr=[{a:'cd', b: '112'}, {a:'ab', b: '23'}, {a:'ef', b:'45'},{a:'cd', b: '112'}, {a:'ab', b: '23'}, {a:'ef', b:'45'}]

})


//Filters need the first two lines
app.filter('changeValueOfA', function(){
	//Need at least one parameter
	return function(data, value){

		//Everything after is just logic for the filter
		var newArr=[];

		var str = value || 'test';
		for(var i=0; i<data.length; i++){
			data[i].a=str;
			newArr.push(data[i]);
		}
		//It needs to return something
		return newArr;
	}
})

