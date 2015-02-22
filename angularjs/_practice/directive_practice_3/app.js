var app=angular.module('myApp', []);

app.controller('MainController', function(){

})


//main directive: the puppet master
app.directive('main', function(){
	return {
		restrict: 'E',
		//main directive is passed the controller from subone(optional)
		require: '^?subone',
		link: function(scope, element, attrs, ctrls){
			//logic from subone is available
			if(!!ctrls)
				ctrls.win();
			else
				alert('none detected');
		}
	}
})



app.directive('subone', function(){
	return {
		restrict: 'A',
		controller: function(){
			var a= 'hey '
			this.win=function(){
				alert(a+'This is from sub one!');
			}
		}
	}

})

app.directive('subtwo', function(){
	return {
		restrict: 'A',
		controller: function(){
			this.win=function(){
				alert('This is from sub two!')
			}
		}
	}

})