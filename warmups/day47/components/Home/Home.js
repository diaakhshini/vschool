var app = angular.module("app.Home", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/Home", {
        templateUrl: "Home/Home.html",
        controller: "HomeCtrl"
    });
});

app.controller("HomeCtrl", function ($scope) {});