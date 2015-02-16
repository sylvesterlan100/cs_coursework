var app= angular.module('myApp', []);

app.controller('MainController', ['$scope', function($scope){
	$scope.photo={
		url: 'duck.jpg',
		date: 'Jan 1, 2014'
	};
	
}]);

/*app.directive('photo', function(){
	return {
		//Element directive: a tag
		restrict: 'E',
		template: "<figure><img width='500px' /><figcaption /></figure>",
		//Photo directive is replaced by template
		replace: true,
		//Transferring data between html and directive
		link: function(scope, element, attrs){
			attrs.$observe('caption', function(value){
				element.find('figcaption').text(value)
			})
			attrs.$observe('photoSrc', function(value){
				element.find('img').attr('src', value)
			})
		}
	}
})*/

//Better way
app.directive('photo', function(){
	return{
		//element directive: a tag
		restrict: 'E',
		template: '<figure><img width="500px" ng-src="{{photoSrc}}" /><figcaption>{{caption}}</figcaption></figure>',
		replace: false,
		scope:{
			caption: '@',
			photoSrc: '@'
		}
	}
})

app.directive('tester', function(){
	return{
		restrict: 'E',
		template: '</h1>This is a test. {{message}}<h1>',
		replace: false,
		scope:{
			message: '@'
		}
	}
})