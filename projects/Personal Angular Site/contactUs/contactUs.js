var app = angular.module("app.contactUs", ["ngRoute"]);
app.service("todoReq", function ($http) {
    this.getData = function () {
        return $http.get("");
    }
});

app.config(function ($routeProvider) {
    $routeProvider.when("/contactUs", {
        templateUrl: "contactUs/contactUs.html",
        controller: "contactUsCtrl"
    });
});

app.controller("contactUsCtrl", function ($scope) {
    $scope.getData = function () {
        todoReq.getData().then(function (response) {
            $scope.todoItems = response.data;
            console.log(data);
        })
    }
});