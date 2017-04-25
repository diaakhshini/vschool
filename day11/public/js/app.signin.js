var app = angular.module("app.signin", ["ngRoute", "signModule"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/signin", {
        templateUrl: "/views/signin.html",
        controller: "signinCtrl"
    });
});

app.controller("signinCtrl", function ($scope, auth) {
    $scope.userinput = {};
    $scope.signin = function () {
        var data = {
            username: $scope.username,
            password: $scope.password
        };
        console.log(data);
        auth.signin(data).then(function (response) {
            console.log(response.data);
            $scope.userinput = {};
        }, function (response) {
            console.log(response.status);

        });
    };
});