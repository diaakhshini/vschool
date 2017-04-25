  var app = angular.module("myApp", []);
  app.service("pokeService", function () {
      this.arr = [];
      this.addPoke = function (name) {
          this.arr.push(name);



      }
      this.removePoke = function (name) {

          for (var i = 0; i < this.arr.length; i++) {
              if (this.arr[i] == name) {
                  this.arr.splice(i, 1);
              } else {
                  alert(name + " not exist");
              }
          }
      }
  });

  app.controller('myCtrl', function ($scope, pokeService) {
      $scope.todoItems = pokeService.arr;
      $scope.addPoke = function (data) {
          pokeService.addPoke(data);
          console.log(data)
      }

      $scope.removePoke = function (data) {
          pokeService.removePoke(data);
          $scope.todoItems = pokeService.arr;
          console.log(data)
      }
  });