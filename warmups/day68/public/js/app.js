//var app = angular.module("myApp", []);
//app.service("todoService", function ($http) {
//    this.getData = function () {
//        return $http.get("http://localhost:8080/menu/")
//    }
//});
//
//
//app.controller("ctrl", function ($scope, todoService) {
//    $scope.todoItems = [];
//    $scope.loadData = function () {
//        todoService.getData().then(function (response) {
//            $scope.todoItems = response.data.data;
//            console.log($scope.todoItems);
//        }, function (response) {
//            console.log(response.status);
//        })
//    }
//});
var app = angular.module("myApp", []);
app.service("todoService", function ($http) {
    this.getData = function () {
        return $http.get("http://localhost:8080/menu/");

    };
    this.postData = function (item) {
        console.log(item)
        return $http.post("http://localhost:8080/menu/", item);
    }
    this.deleteData = function (id) {
        return $http.delete("http://localhost:8080/menu/" + id);
    }
    this.putData = function (id, data) {
        var query = "";
        for (key in data) {
            query += key + "=" + data[key] + "&";
        }
        console.log(query);
        return $http.put("http://localhost:8080/menu/" + id + "?" + query);
    }
});
app.controller("ctrl", function ($scope, todoService) {

    $scope.loadData = function () {
        todoService.getData().then(function (menuData) {
            $scope.menuItems = menuData.data.data;
        })
    };
    $scope.addItem = function () {
        var data = {
            name: $scope.name,
            cost: $scope.cost,
            type: $scope.type
        }
        todoService.postData(data).then(function (response) {
            $scope.loadData();
        })
    }
    $scope.del = function (id) {
        todoService.deleteData(id).then(function (response) {
            $scope.loadData();
        })
    }
    $scope.putdata = function (id) {
        var data = {
            name: $scope.name,
            cost: $scope.cost,
            type: $scope.type
        }
        console.log(data);

        todoService.putData(id, data).then(function (response) {
            console.log(response.data);
            $scope.loadData();
        })
    }
});