//    * * * * * * * * * *
//    * * * * * * * * * *
//    * * * * * x * * * *
//    * * * * * * * * * *
//    * * * * * * * * * *
//    * * * * * * * * * *
//    * * * * * * * * * *
//    * * * * * * * * * *
//    * * * * * * * * * *
//    * * * * * * * * * *


var array = [];
var result = "";
for (var i = 0; i < 10; i++) {
    array[i] = [];
    for (var j = 0; j < 10; j++) {
        array[i][j] = "*";
    }
}

for (var i = 0; i < 10; i++) {
    array[i] = [];
    for (var j = 0; j < 10; j++) {
        result += "*";
    }
    console.log(result);
    result = "";
}