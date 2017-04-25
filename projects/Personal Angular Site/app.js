 var app = angular.module("app", ["ngRoute", "app.Home", "app.contactUs", "app.About"]);


 app.config(function ($locationProvider, $routeProvider) {
     $locationProvider.hashPrefix('');
     $routeProvider.when("/", {
         redirectTo: "/Home"
     }).otherwise("/", {
         redirectTo: "/Home"
     })
 })