var app = angular.module('app', []);
app.service("todoService", function ($http) {
    this.get = function () {
        //        console.log("fsdfgdg")
        return $http.get("http://localhost:8080/data/")
    }
    this.postComment = function (id, person, text) {
        var data = {
            Person: person,
            Comment: text
        };
                console.log("id"+ id)
                console.log(data)
        return $http.post("http://localhost:8080/data/"+id, data)
    }
    this.post = function (data) {
        //        console.log("fsdfgdg")
        return $http.post("http://localhost:8080/data/", data)
    }
    this.deleteData = function (id) {
        //        console.log(id)
        return $http.delete("http://localhost:8080/data/" + id);
    }
    this.deleteComment = function (id,index) {
        //        console.log(id)
        return $http.delete("http://localhost:8080/data/" + id + "/" + index);
    }
    this.updateData = function (id, data) {
        var str = "";
        var fullStr = "";
        for (key in data) {
            str += key + "=" + data[key] + "&";
            fullStr += str;
            str = "";
        }
        console.log(id);
        console.log(str);
        //$.param(data);
        return $http.put("http://localhost:8080/data/" + id + "?" + fullStr);
    }
});

app.controller('mainCtrl', function ($scope, todoService) {
    https: //codepen.io/cfleschhut/pen/rdcqi


        $scope.get = function () {
        //        console.log("adssaf")
        $scope.list = [];
        todoService.get().then(function (response) {
                $scope.list = response.data.data;
                console.log($scope.list)
            },
            function (error) {
                alert("error status :" + error.status)
            })
    }
    $scope.add = function () {

        var data = {
            name: $scope.name,
            type: $scope.type,
            imgUrl: $scope.imgUrl,
            price: $scope.price,
        };
        todoService.post(data).then($scope.get);
        $scope.name = "";
        $scope.type = "";
        $scope.imgUrl = "";
        $scope.price = "";
    };
    $scope.del = function (id) {
        todoService.deleteData(id).then($scope.get);
    }


    $scope.update = function (id) {
        var data = {
            name: $scope.name,
            type: $scope.type,
            imgUrl: $scope.imgUrl,
            price: $scope.price
        }

        todoService.updateData(id, data).then($scope.get);
        $scope.name = "";
        $scope.type = "";
        $scope.imgUrl = "";
        $scope.price = "";
    }
    $scope.upVote = function (data) {
        var total = data.vote + 1;
        todoService.updateData(data._id, {
            vote: total
        }).then($scope.get);

    }

    $scope.downVote = function (data) {
        var total = data.vote - 1;
        todoService.updateData(data._id, {
            vote: total
        }).then($scope.get);

    }
    $scope.comments = [];

    $scope.addComment = function (id,obj) {

        var person = obj.nameP;
        var text = obj.textP;
        todoService.postComment(id,person,text).then($scope.get);

    }


   

    $scope.delComment = function (id,index) {
        todoService.deleteComment(id,index).then($scope.get)
    }

});