var app = angular.module("app.addItem", ["ngRoute"]);
app.service("todoService", function ($http) {
    this.getData = function () {
        return $http.get("");
    }
});

app.config(function ($routeProvider) {
    $routeProvider.when("/addItem", {
        templateUrl: "views/addItem.html",
        controller: "addItemCtrl"
    });
});


app.controller("addItemCtrl", function ($scope, todoServ) {
    $scope.getData = function () {
        todoService.getData().then(function (response) {
            $scope.ProductsItems = response.data;
            console.log(data);
        });
    }
    $scope.loadData = function () {
        todoServ.getALLData().then(function (ProductsData) {
            console.log("Data LOADED!!");
            var tempData = ProductsData.data.data;
            $scope.ProductsItems = [];
            for (var i = 0; i < tempData.length; i++) {
                $scope.ProductsItems.push({
                    _id: tempData[i]._id,
                    imgUrl: tempData[i].imgUrl,
                    name: tempData[i].name,
                    price: tempData[i].price,
                    quantity: tempData[i].quantity,
                    section: tempData[i].section,
                    edit: false
                })
            }

            console.log($scope.ProductsItems);
        })
    };
    $scope.addItem = function () {

        var data = {
            name: $scope.name,
            imgUrl: $scope.imgUrl,
            quantity: $scope.quantity,
            price: $scope.price,
            section: $scope.section

        }
        console.log(data);
        //        todoService.postData(data).then($scope.loadData);
    };

});