var app = angular.module("todoModule", []);
app.service("todoServ", function ($http) {

    this.getALLData = function () {
        console.log("http://localhost:8080/product");
        return $http.get("http://localhost:8080/product");
    }
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