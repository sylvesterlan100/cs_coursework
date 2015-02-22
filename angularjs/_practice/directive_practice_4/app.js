var app=angular.module('myApp', []);
app.controller('MainController', function($scope){
	$scope.test='Testing this out'
});


app.directive('check', function(){
	return {
		restrict: 'EACM',
		template: "<div>This is the template</div>",
		
		replace: false,
		link: function(scope, element, attrs){
			console.log('scope:',scope);
			console.log('element:',element);
			console.log('attrs:',attrs); 
			//scope.test='awesome'
		},
		scope:{
			
		},
		controller: function($scope){
			$scope.stuff='hi';

		}

	}
})