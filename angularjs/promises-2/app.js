var app=angular.module('myApp', []);

//$q helps run asynchronous functions
app.controller("MainController", function($scope, $q){
	//function which returns a promise
	function asyncGreet(name){
		return $q(function(resolve, reject){
			setTimeout(function(){
				if($scope.okToGreet){
					resolve('Hello, '+name+'!');
				}
				else{
					reject('Greeting '+name+' is not allowed.');
				}


			}, 2000);

		});
	}

	var promise=asyncGreet('Robin Hood');

	//Then() activates when the promise returns a value
	//Does not wait for promise to fulfill, but will activate when it is fulfilled
	promise.then(function(greeting){
		alert('Success: '+greeting);
	}, function(reason){
		alert('Failed: '+reason);
	})

})