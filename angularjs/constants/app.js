var app=angular.module('myApp', []);

app.controller('MainController', function($scope, constService, val1Service){
	console.log(constService);
	alert(val1Service);

})

app.constant('constService', {attr: 'this is const data!'});
app.value('valService', function(){
	return 'This is returned from a function'
})

app.value('val1Service', 'hi')