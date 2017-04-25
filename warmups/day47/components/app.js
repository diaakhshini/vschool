var app = angular.module("app", ["ngRoute", "app.About", "app.Diaa", "app.Home"]);


app.config(function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider.when("/", {
        redirectTo: "/Home"
    }).otherwise("/", {
        redirectTo: "/Home"
    })
})