var app = angular.module("app.About", ["ngRoute"]);
app.service("todoReq", function ($http) {
    this.getData = function (limit, name) {
        return $http.get("https://yts.ag/api/v2/list_movies.json?limit=" + limit);
    }
});
app.config(function ($routeProvider) {
    $routeProvider.when("/About", {
        templateUrl: "About/About.html",
        controller: "AboutCtrl"
    });
});

app.controller("AboutCtrl", function ($scope, todoReq) {
    $scope.limit = 5;
    $scope.getData = function () {
        todoReq.getData($scope.limit).then(function (response) {
            $scope.todoItems = response.data;

        })
    }
    $scope.getLimit = function () {

        todoReq.getData($scope.limit).then(function (response) {
            $scope.todoItems = response.data;

        });

    }


});