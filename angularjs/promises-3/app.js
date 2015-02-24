var app=angular.module('myApp', []);
app.controller('MainController', function($scope, $q){
	function asyncGreet(name){
		var deferred = $q.defer();

		setTimeout(function(){deferred.notify('here to test')}, 0);
		setTimeout(function(){
			deferred.notify('About to greet '+name+'.');

			if($scope.okToGreet){
				deferred.resolve('Hello, '+name+'!');
			}
			else{
				
				deferred.reject('Greeting '+name+" is not allowed.");
			}
		}, 1000);
		return deferred.promise;
	}

	var promise=asyncGreet('Robin Hood');
	promise.then(function(greeting){
		alert('Success: '+greeting);
	},
	function(reason){
		alert('Failed: '+reason);
	},
	function(update){
		alert('got notification: '+update);
	})


})