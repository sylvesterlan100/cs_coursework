var app=angular.module('myApp', []);

app.controller('MainController', function(){

})

app.directive('check', function(){
	return {
		//Element and comment
		restrict: 'EM',

		//Replace element/comment with html found in check.html
		templateUrl: 'check.html',
		replace: true,

		//Access and modify the template
		//Affects each directive of the same name individually
		link: function(scope, element, attrs){
			attrs.$observe('msg', function(value){
				element.find('span').text(value);
			
			});
			attrs.$observe('msg', function(value){
				element.find('span').attr('style', 'color:'+value);

			});
			},

		//isolate scope drawing upon outer color
		scope: {
			color: '@'
		}
	}
});

		

	