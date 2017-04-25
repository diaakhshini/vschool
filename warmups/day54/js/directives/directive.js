var app = angular.module("nameModule", []);
app.directive("name", function () {
    return {
        scope: {
            title: "=",
            colorOfText: "@"
        },
        restrict: "AE",
        templateUrl: "js/directives/directive.html",
        link: function (scope, elem, attrs) {
            elem.bind("click", function () {
                scope.title = "hello jameel"
                scope.$apply();

                elem.css("color", scope.colorOfText);


            });
        }
    }
})