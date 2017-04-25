var app = angular.module("myApp", []);
app.service("todoService", function ($http) {
    this.getData = function () {
        return $http.get("http://localhost:8080/Vote");

    };
    this.postData = function (item) {
        console.log(item);
        return $http.post("http://localhost:8080/Vote", item);
    }
    this.deleteData = function (id) {
        return $http.delete("http://localhost:8080/Vote/" + id);
    }
    this.putData = function (id, data) {
        var query = "";
        for (key in data) {
            query += key + "=" + data[key] + "&";
        }
        console.log(query);
        return $http.put("http://localhost:8080/Vote/" + id + "?" + query);
    }
    this.likeDislike = function (id, data) {
        return $http.put("http://localhost:8080/Vote/" + id, query);

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

            title: $scope.title,
            description: $scope.description,
            imgLink: $scope.imgUrl,
            likes: $scope.like,

        }
        todoService.postData(data).then($scope.loadData);
    };

    $scope.del = function (id) {
        todoService.deleteData(id).then(function (response) {
            $scope.loadData();
        })
    };

    $scope.putdata = function (id) {
        var data = {
            title: $scope.title,
            description: $scope.description,
            comment: $scope.comment
        }
        console.log(data);

        todoService.putData(id, data).then(function (response) {
            console.log(response.data);
            $scope.loadData();
        })
    };


    $scope.like = function (id, title, description, imgLink, likes, total,
        comment, vote) {

    }
});