var app = angular.module("app.Home", ["ngRoute"]);
app.service("todoReq", function ($http) {
    this.getData = function () {
        return $http.get("");
    }
});


app.config(function ($routeProvider) {
    $routeProvider.when("/Home", {
        templateUrl: "Home/Home.html",
        controller: "HomeCtrl"
    });
});

app.controller("HomeCtrl", function ($scope) {
    $scope.getData = function () {
        todoReq.getData().then(function (response) {
            $scope.todoItems = response.data;
            console.log(data);
        })
    }
});