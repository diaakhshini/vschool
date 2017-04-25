var app = angular.module("app.signup", ["ngRoute", "signModule"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/signup", {
        templateUrl: "/views/signup.html",
        controller: "signupCtrl"
    });
});

app.controller("signupCtrl", function ($scope, auth) {
    $scope.userinput = {};
    $scope.signup = function () {
        var data = {
            username: $scope.username,
            password: $scope.password
        };
        console.log(data);
        auth.signup(data).then(function (response) {
            console.log(response.data);
            $scope.userinput = {};
        }, function (response) {
            console.log(response.data);

        });
    };
});