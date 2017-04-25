var app = angular.module("myApp", ["mystore"]);

app.controller("myCtrl", function ($scope, store) {
    $scope.todoItems = store.items;


    $scope.addItem = function () {
        store.addItem($scope.name, $scope.cost);
        $scope.name = "";
        $scope.cost = 0;
        $scope.total = store.total;
    };

});