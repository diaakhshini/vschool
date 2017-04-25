var app = angular.module("signModule", []);
app.service("auth", function ($http) {
   
    this.signup = function (data) { 
        return $http.post("http://localhost:8080/auth/signup", data)
    }
    this.signin = function (data) { 
        return $http.post("http://localhost:8080/auth/signin/", data)
    }
   
});
