var app = angular.module("myApp", []);


app.service("todoService", function ($http) {
    this.get = function (num) {
        return $http.get("http://localhost:8080/")
    }
});


app.controller("ctrl", function ($scope, todoService) {
    $scope.get = function () {
        console.log("clicked");
        todoService.get($scope.num).then(function (response) {
                $scope.list = response.data.name;
                console.log($scope.list);
            },
            function (error) {
                alert("error status :" + error.status)
            })
    }
});