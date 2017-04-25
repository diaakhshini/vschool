var app = angular.module("myApp", []);
app.service("todoService", function ($http) {
    this.getData = function () {
        return $http.get("http://localhost:8080/product");

    };
    this.postData = function (item) {
        console.log(item);
        return $http.post("http://localhost:8080/product", item);
    }
    this.deleteData = function (id) {
        return $http.delete("http://localhost:8080/product/" + id);
    }
    this.putData = function (id, data) {
        var query = "";
        for (key in data) {
            query += key + "=" + data[key] + "&";
        }
        console.log(query);
        return $http.put("http://localhost:8080/product/" + id + "?" + query);
    }

});
app.controller("ctrl", function ($scope, todoService) {

    $scope.loadData = function () {
        todoService.getData().then(function (ProductsData) {
            console.log("Data LOADED!!");
            //            $scope.ProductsItems = ProductsData.data.data;
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
        todoService.postData(data).then($scope.loadData);
    };
    $scope.deleteData = function (id) {
        todoService.deleteData(id).then(function (response) {
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

        todoService.putData(dataItem._id, data).then(function (response) {
            console.log(response.data);
            $scope.loadData();
        });
    }


    $scope.toggleEdit = function (index) {
        console.log(index);
        $scope.ProductsItems[index].edit = !$scope.ProductsItems[index].edit;
    };
});