var app = angular.module("app.About", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/About", {
        templateUrl: "About/About.html",
        controller: "AboutCtrl"
    });
});

app.controller("AboutCtrl", function ($scope) {});