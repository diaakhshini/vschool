var app = angular.module("myApp", []);
app.service("todoService", function ($http) {
    this.getData = function () {
        return $http.get("http://localhost:8080/menu/")
    }
});


app.controller("ctrl", function ($scope, todoService) {
    $scope.todoItems = [];
    $scope.loadData = function () {
        todoService.getData().then(function (response) {
            $scope.todoItems = response.data.data;
            console.log($scope.todoItems);
        }, function (response) {
            console.log(response.status);
        })
    }
});