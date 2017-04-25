var app = angular.module("app.Home", ["ngRoute", "todoModule"]);
//app.service("todoService", function ($http) {
//    this.getData = function () {
//        return $http.get("");
//    }
//});
app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "views/home.html",
        controller: "HomeCtrl"
    });
});


app.controller("HomeCtrl", function ($scope, todoServ) {
    console.log("home")
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
        todoServ.postData(data).then($scope.loadData);
    };
    $scope.deleteData = function (id) {
        todoServ.deleteData(id).then(function (response) {
            $scope.loadData();

        });
    }
    $scope.putdata = function (dataItem) {
        console.log("Save Update Data");
        console.log(dataItem);
        var data = {
            name: dataItem.name,
            imgUrl: dataItem.imgUrl,
            quantity: dataItem.quantity,
            price: dataItem.price,
            section: dataItem.section
        }
        console.log(data);

        todoServ.putData(dataItem._id, data).then(function (response) {
            console.log(response.data);
            $scope.loadData();
        });
    }


    $scope.toggleEdit = function (index) {
        console.log(index);
        $scope.ProductsItems[index].edit = !$scope.ProductsItems[index].edit;
    };
})