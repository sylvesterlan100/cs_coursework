var app=angular.module('myApp', []);

app.controller('MainController', function($scope){

});

app.directive('marines', function(){
	return {
		restrict: 'A',
		template: "<div>Marines</div>",
		replace: false,
		controller: function(){
			this.soundoff=function(){
				console.log('Marine Corps')
			}
		}
	}
})

app.directive('gunnerySergeant', function(){
	return {
		restrict: 'A',
		controller: function($scope){
			$scope.soundoff=function(){
				console.log('Gunnery Sgt.')
			}
		}, 
		//^ are directive names (need controllers of these controllers)
		//? optional, null if does not exist
		require: ["^soldier","^marines","^?medalOfHonor"],
		//ctrl are obtained from require
		link: function(scope, element, attrs, ctrls){
			scope.soundoff();
			angular.forEach(ctrls, function(ctrl){
				if(!!ctrl){
					ctrl.soundoff()
				}
			})
		}
	}

})

app.directive('soldier', function(){
	return {
		restrict: 'E',
		controller: function(){
			this.soundoff=function(){
				console.log('Soldier')
			}
		}
	}
})

app.directive('medalOfHonor', function(){
	return {
		restrict: 'A',
		controller: function(){
			this.soundoff=function(){
				console.log('Medal of Honor')
			}
		}
	}
})