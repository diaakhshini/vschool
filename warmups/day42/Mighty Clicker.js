var myapp = angular.module("myApp", []);
//myapp.service("first", function () {})
myapp.controller("myController", function ($scope) {


   $scope.counter = 100;
    $scope.counters = 100;
    $scope.blueService = function () {
        $scope.counter++;
        $scope.counters--;
    }
    $scope.redService = function () {
        $scope.counter--;
        $scope.counters++;

   }
$scope.rest = function () {
    $scope.rest;
}
});