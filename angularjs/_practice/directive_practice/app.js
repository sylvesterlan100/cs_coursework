var app=angular.module('myApp', []);
app.controller('MainController', function(){

})

//creating custom 'test' directive
app.directive('test', function(){

	//always return an object
	return {
		//element, attribute, class, or comment
		restrict: 'E',

		//html template which is inserted
		template: '<div>Check me out! <p>{{msg}}</p></div>',
		
		//does template replace the element which calls this directive
		replace: true,
		
		//creating an isolate scope which is completely private
		scope: {
			//creates variable internally that is one way bound to external variable	
			msg: '@'
		}
	}
})