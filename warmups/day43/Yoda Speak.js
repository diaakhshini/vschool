var app = angular.module("app", {});
app.service("todoService",function($http)){
            this.getData = function(){
    return
    $http.get("https://yoda.p.mashape.com/yoda?sentence=");
    
}
            };
app.controller("httpCtrl", function ($scope,todoService)) {
             $scope.loadData
               
               }