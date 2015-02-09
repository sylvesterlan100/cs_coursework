var app=angular.module('myApp',[]);

app.controller("FirstController", function($scope) {
    $scope.user={
    	name: 'Dr.Evil'
    };
});
app.controller("SecondController", function($scope) {
    
    $scope.lair={
    	name: 'Underground'
    };
});