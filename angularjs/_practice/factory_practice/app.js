var app=angular.module('myApp', []);

app.controller('MainController', function($scope, productService){
	$scope.new=function(){
		productService.add($scope.product.name, $scope.product.price);
		$scope.products=productService.view();
	}
	$scope.products=productService.view();

});

//Creates a service module, a black code box
app.factory('productService', function(){
	
	//inaccessible 'private' variables or functions
	var inv=[];

	//accessible variables and functions
	return {

		add: function(name, price){
			var temp={name: name, price: '$'+price};
			inv.push(temp);
		},
		view: function(){
			return inv.slice();
		}
	}

})