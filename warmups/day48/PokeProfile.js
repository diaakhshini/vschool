var app = angular.module("app", []);


app.service("todoService", function ($http) {
    this.getpoke = function (num) {
        return $http.get("http://pokeapi.co/api/v2/pokemon/" + num + "/")
    }
});


app.controller("ctrl", function ($scope, todoService) {
    $scope.getpoke = function () {
        console.log("clicked");
        todoService.getpoke($scope.num).then(function (response) {
                $scope.list = response.data.name;
                console.log($scope.list);
            },
            function (error) {
                alert("error status :" + error.status)
            })
    }
});