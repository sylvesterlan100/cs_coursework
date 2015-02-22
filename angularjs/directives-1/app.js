var app=angular.module('myApp', []);

app.controller('MainController', function(){



})

app.directive('photo', function(){
	return {
		restrict: 'AECM',    //A(ttribute), E(lement), C(lass), M(comment)
		
		//templateUrl: 'photo.html',
		template: '<div> <p>All the tests are being run.</p> </div>',
		replace: true,

		//link always gets passed scope, element, and attrs; and sometimes ctrls
		link: function(scope, element, attrs){
			console.log(attrs);

			//update the paragraph tags when the attribute 'text' is modified
			attrs.$observe('text', function(text){
				element.find('p').text(text)
			})
		}
 	}



})