var app = angular.module("myApp", []);

app.service("todoReq", function ($http) {
            this.getData = function () {
                return $http.get("http://api.vschool.io/diaa/todo/");
            }

            this.postData = function (data) {
                return $http.post("http://api.vschool.io/diaa/todo/", data);

            }

            this.deletData = function (id) {
                return $http.delete("http://api.vschool.io/diaa/todo/" + id);
            }

        };




        app.controller("myController", function ($scope, todoReq); $scope.todoItems = []; {
                $scope.loadData = function () {
                    todoReq.getData().then(function (response) {
                            $scope.todoItems = response.data;
                        },

                        function (response) {
                            console.log(response.status);
                        }
                    )
                };

                $scope.add = function (task) {
                    var data = {
                        title: task
                    };
                    console.log(data)
                    todoReq.postData(data).then($scope.loadData, function (error) {
                        console.log(error.status);
                    });
                    $scope.task = "";
                }
                $scope.deletItem = function (id) {
                    todoReq.deletData(id).then($scope.loadData, function (response) {
                        console.log(response.status);
                    });
                }

            }