var app = angular.module("myApp", []);
app.filter("search", function () {
    return function (input, term) {
        for (var i = 0; i < input.length; i++) {
            if (input[i].name.indexOf(term) != -1) {
                result.push(input[i])
            }
        }
        return result;
    }
})
app.controller("ctrl", function ($scope) {
    $scope.searchTerm = "";
    $scope.data =
        name: "rdwan.png",
        size: 8, {
            name: "nabd.pdf",
            size: 5
        }, {
            name: "esterdadomar",
            size: 4

        },

})