var app = angular.module("myApp", []);

app.service("like", function () {
    this.counter1 = 0;
    this.counter2 = 0;
    this.like1 = function () {
        this.counter1++;
    }
    this.like2 = function () {
        this.counter2++;
    }
});

app.controller("mainController", function ($scope, like) {
    $scope.counter1 = like.counter1;
    $scope.counter2 = like.counter2;
    $scope.like1 = function () {
        like.like1();
        $scope.counter1 = like.counter1;
    }
    $scope.like2 = function () {
        like.like2();
        $scope.counter2 = like.counter2;
    }
});