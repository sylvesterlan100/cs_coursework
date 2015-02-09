var app=angular.module('myApp', []);


app.controller('MainController',['$scope', 'DataService', function($scope, DataService){
	$scope.myData=DataService.data;
}]);

app.factory('DataService', ['AppendService', function(AppendService){
	return {
		data: AppendService.append('This is a service data')
	}
}]);

app.factory('AppendService', function(){
	return{
		append: function(val){
			return val+' and THIS too!'
		}
	}
})

