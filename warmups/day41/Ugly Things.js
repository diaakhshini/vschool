var app = angular.module("myApp", []);
app.controller("myController", function ($scope) {

  $scope.arr = [];
    $scope.addImg = function () {
$scope.arr.push({
    title: $scope.title,
    img: $scope.imgUrl,
    desc: $scope.description
});
    }


});