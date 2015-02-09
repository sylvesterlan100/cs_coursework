var app=angular.module('myApp',[]);

app.controller("FirstController", function($scope) {
    $scope.first=this;
    $scope.first.user={
    	name: 'Dr.Evil'
    };
});
app.controller("SecondController", function($scope) {
    $scope.second=this;
    $scope.second.lair={
    	name: 'Underground'
    };
});