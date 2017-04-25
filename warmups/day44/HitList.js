    var app = angular.module("myApp", []);
    app.service("todoReq", function ($http) {
        this.getData = function () {
            return $http.get('http://api.vschool.io:6543/hitlist.json')
        }
    });

    app.controller('myCtrl', function ($scope, todoReq) {
        $scope.todoItems = [];
        $scope.loadData = function () {
            todoReq.getData().then(function (response) {
                $scope.todoItems = response.data;

            }, function (respose) {
                console.log(respose.status);
            });
        }

        $scope.add = function () {
            var data = {
                title: $scope.task
            };
            console.log(data)
            todoReq.postData(data).then($scope.loadData, function (error) {
                console.log(error.status);
            });
            $scope.task = "";
        }

        $scope.deletItem = function (id) {
            todoReq.deletData(id).then($scope.loadData, function (error) {
                console.log(error.status);
            });
        }
    });