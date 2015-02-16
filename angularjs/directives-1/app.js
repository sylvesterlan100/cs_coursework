var app=angular.module('myApp', []);

app.controller('MainController', function(){



})

app.directive('photo', function(){
	return {
		restrict: 'AECM',    //A(ttribute), E(lement), C(lass), M(comment)
		
		//templateUrl: 'photo.html',
		template: '<div> <p>All the tests are being run.</p> </div>',
		replace: true,
		link: function(scope, element, attrs){
			console.log(attrs);
			attrs.$observe('text', function(text){
				element.find('p').text(text)
			})
		}
 	}



})