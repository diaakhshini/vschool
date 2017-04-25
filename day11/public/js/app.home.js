var app = angular.module("app.home", ["ngRoute", "reqModule"]);

app.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: "views/home.html",
        controller: "homeCtrl"
    });
});

app.controller("homeCtrl", function ($scope, requests) {
    $scope.userInput = {};
    $scope.todoItems = [];
    $scope.getData = function () {
        requests.get().then(function (response) {
            //            console.log(response.data.data)
            var tempData = response.data.data;
            //            console.log(tempData);
            $scope.todoItems = [];
            for (var i = 0; i < tempData.length; i++) {
                $scope.todoItems.push({
                    _id: tempData[i]._id,
                    name: tempData[i].name,
                    cost: tempData[i].cost,
                    isEdit: false
                });
            }
        }, function (response) {
            console.log(response.status);

        });
    };

    $scope.addItem = function () {
        var data = {
            name: $scope.userInput.name,
            cost: $scope.userInput.cost,
        }
        requests.post(data).then(function (response) {
            $scope.getData();
            $scope.userInput = {};
        }, function (response) {
            console.log(response.status);
        });
    };
    $scope.remove = function (id) {
        requests.deleteData(id).then(function (response) {
            $scope.getData();
        }, function (response) {
            console.log(response.status);
        })
    };

    $scope.toggleEdit = function (index) {
        $scope.todoItems[index].isEdit = !$scope.todoItems[index].isEdit;
    };
    $scope.save = function (id, data) {
        requests.updateData(id, data).then(function (response) {
            $scope.getData();
        }, function (response) {
            console.log(response.status);

        });

    }

});