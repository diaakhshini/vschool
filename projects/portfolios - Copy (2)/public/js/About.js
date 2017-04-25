var app = angular.module("app.About", ["ngRoute", "todoModule"]);
app.service("todoService", function ($http) {
    this.getData = function (limit, name) {
        //        return $http.get("");
    }
});
app.config(function ($routeProvider) {
    $routeProvider.when("/About", {
        templateUrl: "About/About.html",
        controller: "AboutCtrl"
    });
});

app.controller("AboutCtrl", function ($scope, todoService) {
    //    $scope.limit = 5;
    $scope.getData = function () {
        todoService.getData($scope.limit).then(function (response) {
            $scope.ProductsItems = response.data;

        })
    }
    $scope.getLimit = function () {

        todoService.getData($scope.limit).then(function (response) {
            $scope.ProductsItems = response.data;

        });

    }


});