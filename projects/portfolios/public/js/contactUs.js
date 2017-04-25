var app = angular.module("app.contactUs", ["ngRoute"]);
app.service("todoService", function ($http) {
    this.getData = function () {
        return $http.get("");
    }
});

app.config(function ($routeProvider) {
    $routeProvider.when("/contactUs", {
        templateUrl: "views/contactUs.html",
        controller: "contactUsCtrl"
    });
});

app.controller("contactUsCtrl", function ($scope) {
    $scope.getData = function () {
        todoService.getData().then(function (response) {
            $scope.ProductsItems = response.data;
            console.log(data);
        })
    }
});