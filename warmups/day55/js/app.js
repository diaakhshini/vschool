var app = angular.module("myApp", ["shopModule"]);

app.controller("myController", function ($scope) {

    $scope.shopeItems = [];
    $scope.addShopItem = function () {
        $scope.shopeItems.push({
            name: $scope.name,
            amount: $scope.amount,
            price: $scope.price
        });
        $scope.name = "";
        $scope.amount = 0;
        $scope.price = 0;
    }
});