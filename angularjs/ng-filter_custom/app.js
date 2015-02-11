 var app = angular.module('myApp', []);

app.controller('MainController', function($scope, $filter){
	$scope.mydata={arr:['jane', 'jake', 'steven', 'hank'], obj:[{name: 'sarah', age: 24, gender: 'female'}, {name: 'john', age: 35}, {name: 'andy', age: 12}]}
})	

app.filter('charlimit', function(){
	return function(input, length){
		if(!length){
			length=10;
		}
		if(!input){
			return "";
		}
		if(input.length<=length){
			return input
		}
		else{
			return input.substring(0, length)+'...'
		}
	}
})

app.filter('candrink', function(){
	return function(data, minage, age){
		var filtered=[];
		if(!minage){
			minage=21;
		}
		for(var i=0; i<data.length;i++){
			var value=data[i];
			if(value.age>=minage){
				value.name=age||value.name;
				filtered.push(value)
			}
		}
		return filtered;
	}
})

app.filter('addRandGender', function(){
	return function(data){
		var result=[];
		for(var i=0;i<data.length; i++){
			if(!data[i].gender){
				value=data[i];
				value.gender=(Math.random()>0.5 ? 'male' : 'female');
				result.push(value);
			}
			else{
				result.push(data[i]);
			}

		}
		return result;
	}
})