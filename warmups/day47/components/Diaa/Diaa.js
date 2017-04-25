var app = angular.module("app.Diaa", ["ngRoute"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/Diaa", {
        templateUrl: "Diaa/Diaa.html",
        controller: "DiaaCtrl"
    });
});

app.controller("DiaaCtrl", function ($scope) {});