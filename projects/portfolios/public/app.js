 var app = angular.module("app", ["ngRoute", "app.Home", "app.contactUs", "app.About", "app.addItem"]);


 app.config(function ($locationProvider, $routeProvider) {
     $locationProvider.hashPrefix('');
     $routeProvider.when("/", {
         redirectTo: "/home"
     }).otherwise("/", {
         redirectTo: "/home"
     })
 });